import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import {
  AntDesignIcon,
  ApolloIcon,
  Auth0Icon,
  BabelIcon,
  BootstrapIcon,
  CloudinaryIcon,
  CraIcon,
  DigitalOceanIcon,
  DockerIcon,
  EslintIcon,
  ExpressIcon,
  GatsbyIcon,
  GqlIcon,
  HerokuIcon,
  JavaScriptIcon,
  JestIcon,
  JwtIcon,
  KeystoneIcon,
  MarkdownHereIcon,
  MongoDbIcon,
  MySqlIcon,
  NextIcon,
  OauthIcon,
  PhpIcon,
  PostgreSqlIcon,
  ReduxIcon,
  RemarkIcon,
  SequelizeIcon,
  StyledComponentsIcon,
  StyleLintIcon,
  TailwindIcon,
  TsqlIcon,
  TypeOrmIcon,
  TypeScriptIcon,
  VercelIcon,
  VimIcon,
  WebpackIcon,
  YamlIcon,
} from '../lib/icons.js'

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  // { name: "Contact", href: "#", current: false },
];

const features = [
  {
    name: "MongoDB",
    description:
      "MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are useful for working with large sets of distributed data.",
    icon: GlobeAltIcon,
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/MongoDB_kijpbf.png",
  },
  {
    name: "Express",
    description:
      "Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily",
    icon: ScaleIcon,
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/Express_wujrfp.png",
  },
  {
    name: "React",
    description:
      "React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps.",
    icon: LightningBoltIcon,
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/React_d4ohvz.png",
  },
  {
    name: "Node",
    description:
      "Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.",
    icon: MailIcon,
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1644973772/portfolio/Node_rvzgam.png",
  },
  {
    name: "Next",
    description:
      "Next.js gives the best developer experience with all the features needed for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. I updated my stack from React to Next.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038955/portfolio/next-js_hsnhdu.svg",
  },
  {
    name: "GraphQL/Apollo",
    description:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with existing data. Apollo is a platform for building a unified graph, a communication layer that helps you manage the flow of data between your application clients (such as web and native apps) and your back-end services.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038953/portfolio/graphql_mmjvnc.svg",
  },
  {
    name: "Tailwind",
    description:
      "Tailwind is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038956/portfolio/tailwind-css-2_wkrwwu.svg",
  },
  // {
  //   name: "Bootstrap",
  //   description:
  //     "Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages (as opposed to web apps).",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038953/portfolio/bootstrap-4_vkpfit.svg",
  // },
  // {
  //   name: "Material-UI",
  //   description:
  //     "Material-UI is a library that allows import and use of different components to create a user interface in React applications.",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038955/portfolio/material-ui-1_bcd0bj.svg",
  // },
  // {
  //   name: "Wordpress",
  //   description:
  //     "Wordpress is a free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database.",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038958/portfolio/wordpress-blue_csvhao.svg",
  // },
  {
    name: "Keystone",
    description:
      "Keystone is a CMS that helps to build faster and scale. By describing just the schema Keystone creates GraphQL API & Management UI for content and data.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038955/portfolio/keystonejs_lemjmk.svg",
  },
  // {
  //   name: "Vercel",
  //   description:
  //     "Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038957/portfolio/vercel_z9kl3z.svg",
  // },
  // {
  //   name: "DigitalOcean",
  //   description:
  //     "DigitalOcean provides developers cloud services that help to deploy and scale applications that run simultaneously on multiple computers. I use it to deploy backend applications",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645040157/portfolio/digitalocean-tile_wwzkrk.svg",
  // },
  {
    name: "Cloudinary",
    description:
      "Cloudinary provides cloud-based image and video management services. It enables users to upload, store, manage, manipulate, and deliver images and video for websites and apps.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038971/portfolio/cloudinary-seeklogo.com_ciitck.svg",
  },
  {
    name: "Mailgun",
    description:
      "Mailgun is an API-based email delivery service for sending, receiving, and tracking emails.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038955/portfolio/mailgun_xdguwj.svg",
  },
  // {
  //   name: "Adobe Indesign",
  //   description:
  //     "Adobe InDesign is a desktop publishing and page layout designing software application.",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038953/portfolio/adobe-indesign-cs6_hjsdfv.svg",
  // },
  // {
  //   name: "Adobe Photoshop",
  //   description:
  //     "Adobe Photoshop is a raster graphics editor software used to edit images.",
  //   src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038953/portfolio/adobe-photoshop-cs6_lxgv0y.svg",
  // },
  {
    name: "Figma",
    description:
      "Figma is a vector graphics editor and prototyping tool which is primarily web-based.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038963/portfolio/figma-seeklogo.com_cfxwna.svg",
  },
  {
    name: "Typescript",
    description:
      "TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. I am in the process of upgrading my stack to Typescript from Javascript.",
    src: "https://res.cloudinary.com/yongstalee/image/upload/v1645038956/portfolio/typescript_uwpm9g.svg",
  },
];

const projects = [
  {
    name: "eCommerce-backend",
    description:
      "Backend for commercial website. Transactions handled by Stripe.js and Paypal. Email verification with Mailgun.",
    githubUrl: "https://github.com/yhlee-dho/commerce-keystone-backend",
    deployUrl: "https://api.yhlee.io",
    imageUrl:
      "https://res.cloudinary.com/yongstalee/image/upload/v1645050261/portfolio/ecommerce-backend_yynyau.png",
    stack: [
      KeystoneIcon,
      ExpressIcon,
      TypeScriptIcon,
      MongoDbIcon,
      DigitalOceanIcon,
      GqlIcon,
    ],
  },
  {
    name: "eCommerce-frontend",
    description:
      "Frontend for commercial website with administrator pages for product and order management.",
    githubUrl: "https://github.com/yhlee-dho/commerce-keystone-frontend",
    deployUrl: "https://commerce.yhlee.io",
    imageUrl:
      "https://res.cloudinary.com/yongstalee/image/upload/v1645050261/portfolio/ecommerce-frontend_hvkvvy.png",
    stack: [
      NextIcon,
      JavaScriptIcon,
      TailwindIcon,
      StyledComponentsIcon,
      CloudinaryIcon,
      EslintIcon,
      GqlIcon,
      JestIcon,
      VercelIcon,
    ],
  },
];

export { navigation, features, projects };
