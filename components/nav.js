import Link from 'next/link';

import { Layout as AntLayout, Menu } from 'antd';
const { Header } = AntLayout;

const Nav = ({ navItem }) => {
  return (
    <Header className={'layout__header'}>
      <div className={'layout__header-content'}>
        <img className="logo" src={'/images/ramen.svg'} />
        <Menu className={'layout__header-menu'} theme="dark" mode="horizontal" selectedKeys={[navItem]}>
          <Menu.Item key="/">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/recipes/miso-ramen">
            <Link href="/recipes/miso-ramen">
              <a>Recipes</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Nav;
