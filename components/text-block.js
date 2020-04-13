import { Layout, Typography } from 'antd';
const { Paragraph } = Typography;

const TextBlock = ({ data }) => (
  <Typography>
    {[].concat(data).map((d) => (
      <Paragraph key={d}>
        <div className={'text-block__content'} dangerouslySetInnerHTML={{ __html: d }}></div>
      </Paragraph>
    ))}
  </Typography>
);

export default TextBlock;
