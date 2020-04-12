import Instructions from './instructions';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const Recipe = ({ title, ...props }) => {
  return (
    <Layout>
      <Content className={'layout__content'}>
        <Title>{title}</Title>
        <Instructions {...props} />
      </Content>
    </Layout>
  );
};

export default Recipe;
