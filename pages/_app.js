import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Yong Lee</title>
        <meta
          name="Description"
          content="Portfolio made with Next.js and Tailwind.css"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
