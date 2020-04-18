import Link from 'next/link';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title={'Home'} navItem={'/'}>
      <h1>Homepage</h1>
      <Link href="/recipes/miso-ramen">
        <a>Recipes</a>
      </Link>
    </Layout>
  );
}
