import { Fragment } from 'react';
import { Layout as AntLayout } from 'antd';
import PageHead from './page-head';
import Nav from './nav';
import Footer from './footer';

const { Content } = AntLayout;

const Layout = ({ children, title, banner, navItems }) => (
  <Fragment>
    <PageHead title={title} />
    <AntLayout>
      <Nav navItems={navItems} />
      <Content className={'layout__wrapper'}>
        {banner && <div className={'layout__banner'}>{banner}</div>}
        <div className={'layout__content'}>{children}</div>
      </Content>
      <Footer />
    </AntLayout>
  </Fragment>
);

export default Layout;
