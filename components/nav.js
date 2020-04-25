import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout as AntLayout, Menu } from 'antd';

import { ROUTES } from '../constants';

const { Header } = AntLayout;
const { SubMenu } = Menu;

const Nav = ({ navItems = [] }) => {
  const router = useRouter();
  return (
    <Header className={'layout__header'}>
      <div className={'layout__header-content'}>
        <Link href={ROUTES.home.href}>
          <img className="logo" src={'/images/ramen.svg'} />
        </Link>
        <Menu
          className={'layout__header-menu'}
          inlineCollapsed={false}
          theme="dark"
          mode="horizontal"
          selectedKeys={[router.asPath]}
        >
          <Menu.Item key={ROUTES.home.href}>
            <Link href={ROUTES.home.href}>
              <a>{ROUTES.home.label}</a>
            </Link>
          </Menu.Item>
          <SubMenu title={ROUTES.recipes.label}>
            {navItems.map(({ title, slug }) => {
              return (
                <Menu.Item key={slug}>
                  <Link href={ROUTES.recipes.href} as={slug}>
                    <a>{title}</a>
                  </Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        </Menu>
      </div>
    </Header>
  );
};

export default Nav;
