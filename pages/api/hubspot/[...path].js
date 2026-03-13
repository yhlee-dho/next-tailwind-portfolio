/**
 * Proxy HubSpot CDN paths with headers required for reverse proxy.
 * Rewrites in vercel.json send /_hcms/*, /hs/*, /hubfs/*, etc. here.
 *
 * Required request headers sent to HubSpot (see HubSpot reverse proxy setup docs):
 *   X-Forwarded-For: client IP
 *   X-HubSpot-Trust-Forwarded-For: true
 *   X-HS-Public-Host: yhlee.io
 *   X-Client-IP: end user IP (preferred for location/personalization)
 */

const HUBSPOT_ORIGIN = 'https://50818869.sites-proxy.hscoscdn10.net';
const HUBSPOT_PUBLIC_HOST = 'yhlee.io';

export default async function handler(req, res) {
  const pathSegments = req.query.path || [];
  const path = Array.isArray(pathSegments) ? pathSegments.join('/') : pathSegments;
  const upstreamPath = path ? `/${path}` : '/';
  const params = new URLSearchParams(req.query);
  params.delete('path');
  const qs = params.toString();
  const finalUrl = qs ? `${HUBSPOT_ORIGIN}${upstreamPath}?${qs}` : `${HUBSPOT_ORIGIN}${upstreamPath}`;

  const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.headers['x-real-ip'] || '';

  const headers = {
    ...Object.fromEntries(
      Object.entries(req.headers).filter(
        ([k]) => !['host', 'connection', 'x-forwarded-host'].includes(k.toLowerCase())
      )
    ),
    host: new URL(HUBSPOT_ORIGIN).host,
    'x-hs-public-host': HUBSPOT_PUBLIC_HOST,
    'x-hubspot-trust-forwarded-for': 'true',
    'x-client-ip': clientIp,
    'x-forwarded-for': clientIp,
    'x-forwarded-proto': req.headers['x-forwarded-proto'] || 'https',
  };

  try {
    const response = await fetch(finalUrl, {
      method: req.method,
      headers,
      body: undefined,
    });

    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (!['transfer-encoding', 'connection'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });
    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (err) {
    console.error('HubSpot proxy error:', err);
    res.status(502).json({ error: 'Bad Gateway', message: err.message });
  }
}
