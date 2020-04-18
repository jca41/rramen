import { Fragment } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import PageHead from './page-head';
import Nav from './nav';

const { Content, Footer } = AntLayout;

const Layout = ({ children, title }) => (
  <Fragment>
    <PageHead title={title} />
    <AntLayout>
      <Nav />
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
