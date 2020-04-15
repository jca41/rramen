import Head from 'next/head';
import { Fragment } from 'react';
import { Layout as AntLayout } from 'antd';

const { Content } = AntLayout;

const Layout = ({ children, title }) => (
  <Fragment>
    <Head>
      <title>{`Ramen_Lord recipes | ${title}`}</title>
      <script defer type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    ;
    <AntLayout>
      <Content className={'layout__content'}>{children}</Content>
    </AntLayout>
  </Fragment>
);

export default Layout;
