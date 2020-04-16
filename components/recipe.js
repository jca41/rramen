import { Typography, Tag, Divider } from 'antd';
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import Instructions from './instructions';
import TextBlock from './text-block';
import ImageCarousel from './image-carousel';

const { Title, Text, Paragraph } = Typography;
import Layout from './layout';

const Recipe = ({ title, originalRecipe, intro, method, images, ...props }) => {
  return (
    <Layout title={title}>
      <Typography>
        <Title className={'recipe__title'}>{title}</Title>
        <ImageCarousel data={images} />
        <Divider />
        <ReactMarkdown className={'recipe__intro'} source={intro} />
        <Paragraph className={'recipe__original-link'}>
          <Text strong> Original recipe: </Text>
          <Tag color="gold">
            <a target={'_blank'} href={originalRecipe}>
              link
            </a>
          </Tag>
        </Paragraph>
      </Typography>
      <Instructions {...props} />
    </Layout>
  );
};

export default Recipe;
