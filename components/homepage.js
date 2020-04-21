import { Fragment } from 'react';
import { Typography } from 'antd';

import { REDDIT_URL } from '../constants';
import Layout from '../components/layout';
import Banner from '../components/banner';
import RecipeList from './recipe-list';
const { Title } = Typography;

const Homepage = () => {
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
        <RecipeList />
      </Layout>
    </Fragment>
  );
};

export default Homepage;
