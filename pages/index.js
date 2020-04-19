import Link from 'next/link';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title={'Home'}>
      <h1>Homepage</h1>
      <Link href="/recipes/[slug]" as="/recipes/miso-ramen">
        <a>Recipes</a>
      </Link>
    </Layout>
  );
}
