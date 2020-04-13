import { Fragment, useState } from 'react';
import { Steps, Typography } from 'antd';

const { Step } = Steps;
const { Title, Paragraph } = Typography;

const StepsComponent = ({ data = [] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Fragment>
      <Title className={'ant-list-header'} level={4}>
        Steps
      </Title>
      <Steps direction="vertical" current={current} onChange={setCurrent}>
        {data.map((i) => (
          <Step key={i} description={<Paragraph>{i}</Paragraph>} />
        ))}
      </Steps>
    </Fragment>
  );
};

export default StepsComponent;
