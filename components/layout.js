import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { Layout as AntLayout, Menu } from 'antd';

const { Content, Header, Footer } = AntLayout;

const Layout = ({ children, title }) => (
  <Fragment>
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
    <AntLayout>
      <Header className={'layout__header'}>
        <div className={'layout__header-content'}>
          <img className="logo" src={'/images/ramen.svg'} />
          <Menu className={'layout__header-menu'} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Recipes</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className={'layout__content'}>{children}</Content>
      <Footer style={{ textAlign: 'center' }} theme={'dark'}>
        <div>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">
            Flat Icons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Footer>
    </AntLayout>
  </Fragment>
);

export default Layout;
