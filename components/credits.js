import { RedditCircleFilled } from '@ant-design/icons';
import { Typography, Tag as AntTag } from 'antd';

const { Text, Paragraph } = Typography;

const Tag = ({ label, href }) => (
  <AntTag color="gold" icon={<RedditCircleFilled className={'credits__icon'} />}>
    <a target={'_blank'} rel="noopener noreferrer" href={href}>
      {label}
    </a>
  </AntTag>
);

const Credits = ({ originalRecipe, author }) => (
  <Paragraph className={'credits'}>
    <Text strong> Credits: </Text>
    <Tag label={`u/${author.name}`} href={author.profile} />
    <Tag label={'r/post'} href={originalRecipe} />
  </Paragraph>
);

export default Credits;
