import { Layout, Typography, Row, Col } from 'antd';
import { Fragment } from 'react';
import Instructions from './instructions';
import TextBlock from './text-block';
import ImageCarousel from './image-carousel';

const { Content } = Layout;
const { Title, Text } = Typography;

const Recipe = ({ title, description, method, images, ...props }) => {
  return (
    <Layout>
      <Content className={'layout__content'}>
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
      </Content>
    </Layout>
  );
};

export default Recipe;
