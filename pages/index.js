import { Fragment } from 'react';
import { Typography } from 'antd';

import Layout from '../components/layout';
import { REDDIT_URL } from '../constants';

import Banner from '../components/banner';
const { Title } = Typography;

export default function Home() {
  const banner = (
    <Banner>
      <Fragment>
        <Title className={'center-align'} level={1}>
          Ramen! recipes
        </Title>
        <Title className={'center-align'} level={3}>
          A collection of recipes from{' '}
          <a href={REDDIT_URL} target={'_blank'}>
            r/ramen
          </a>
        </Title>
      </Fragment>
    </Banner>
  );

  return (
    <Fragment>
      <Layout title={'Home'} banner={banner}>
        <Typography className={'homepage'}></Typography>
      </Layout>
    </Fragment>
  );
}
