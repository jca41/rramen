import { Typography } from 'antd';
import { Fragment } from 'react';
import Instructions from './instructions';
import TextBlock from './text-block';
import ImageCarousel from './image-carousel';

const { Title } = Typography;
import Layout from './layout';

const Recipe = ({ title, description, method, images, ...props }) => {
  return (
    <Layout title={title}>
      <Typography>
        <Title>{title}</Title>
        <ImageCarousel data={images} />
        <TextBlock data={description} />
        {method && (
          <Fragment>
            <Title level={2}>Method</Title>
            <TextBlock data={method} />
          </Fragment>
        )}
      </Typography>
      <Instructions {...props} />
    </Layout>
  );
};

export default Recipe;
