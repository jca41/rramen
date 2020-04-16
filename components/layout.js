import Head from 'next/head';
import { Fragment } from 'react';
import { Layout as AntLayout, Menu } from 'antd';

const { Content, Header, Footer } = AntLayout;

const Layout = ({ children, title }) => (
  <Fragment>
    <Head>
      <title>{`Ramen_Lord recipes | ${title}`}</title>
      <script defer type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <AntLayout>
      <Header className={'layout__header'}>
        <div className={'layout__header-content'}>
          <img className="logo" src={'/ramen.svg'} />
          <Menu className={'layout__header-menu'} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
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
