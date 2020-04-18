import Head from 'next/head';

const PageHead = ({ title }) => (
  <Head>
    <title>{`r/ramen recipes | ${title}`}</title>
    <meta name="description" content="Collection of recipes from https://www.reddit.com/r/ramen/" />
    <meta name="author" content="https://github.com/jca41" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="theme-color" content="#ffffff"></meta>

    <script defer type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Head>
);

export default PageHead;
