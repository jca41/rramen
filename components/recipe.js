import { Typography, Tag, Divider } from 'antd';
import ReactMarkdown from 'react-markdown';
import Instructions from './instructions';
import ImageCarousel from './image-carousel';
import Layout from './layout';
import Credits from './credits';

const { Title } = Typography;

const Recipe = ({ title, originalRecipe, intro, method, images, recipes, ...props }) => {
  return (
    <Layout title={title} navItems={recipes}>
      <Typography>
        <Title className={'center-align'}>{title}</Title>
        <ImageCarousel data={images} />
        <Divider />
        <ReactMarkdown className={'recipe__intro'} source={intro} />
        <Credits originalRecipe={originalRecipe} />
      </Typography>
      <Instructions {...props} />
    </Layout>
  );
};

export default Recipe;
