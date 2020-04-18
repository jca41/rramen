import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout as AntLayout, Menu } from 'antd';
const { Header } = AntLayout;

const ROUTES = {
  home: {
    label: 'Home',
    href: '/',
  },
  recipes: {
    label: 'Recipes',
    href: '/recipes',
  },
};

const Nav = () => {
  const router = useRouter();
  return (
    <Header className={'layout__header'}>
      <div className={'layout__header-content'}>
        <img className="logo" src={'/images/ramen.svg'} />
        <Menu className={'layout__header-menu'} theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
          <Menu.Item key={ROUTES.home.href}>
            <Link href={ROUTES.home.href}>
              <a>{ROUTES.home.label}</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={ROUTES.recipes.href}>
            <Link href="/recipes/[slug]" as="/recipes/miso-ramen/">
              <a>{ROUTES.recipes.label}</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Nav;
