import { RedditCircleFilled, RedditOutlined } from '@ant-design/icons';
import { Typography, Tag as AntTag } from 'antd';

const { Text, Paragraph } = Typography;

const Tag = ({ label, href }) => (
  <AntTag color="gold" icon={<RedditCircleFilled className={'credits__icon'} />}>
    <a target={'_blank'} href={href}>
      {label}
    </a>
  </AntTag>
);

const Credits = ({ originalRecipe }) => (
  <Paragraph className={'credits'}>
    <Text strong> Credits: </Text>
    <Tag label={'u/jca4'} href={'/jca41'} />
    <Tag label={'r/post'} href={originalRecipe} />
  </Paragraph>
);

export default Credits;
