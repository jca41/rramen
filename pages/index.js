import Link from 'next/link';
import { Typography } from 'antd';

import Layout from '../components/layout';

const { Title, Text } = Typography;

export default function Home() {
  return (
    <Layout title={'Home'}>
      <Typography>
        <Title className={'page-title'} level={1}>
          Welcome to Ramen! recipes
        </Title>
        <Link href="/recipes/[slug]" as="/recipes/miso-ramen">
          <a>Recipes</a>
        </Link>
      </Typography>
    </Layout>
  );
}
