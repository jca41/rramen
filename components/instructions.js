import { Fragment } from 'react';
import { Tabs, Row, Col, Typography } from 'antd';
import Ingredients from './ingredients';
import Steps from './steps';
const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;

const TabContent = ({ ingredients, steps, description }) => (
  <Fragment>
    <Paragraph>{description}</Paragraph>
    <Row gutter={[32, 0]}>
      <Col span={24} md={{ span: 12 }}>
        <Ingredients data={ingredients} />
      </Col>
      <Col span={24} md={{ span: 12 }}>
        <Steps data={steps} />
      </Col>
    </Row>
  </Fragment>
);

const Instructions = ({ components, broth, tare, noodles, oil }) => {
  return (
    <div className={'instructions'}>
      <Tabs animated={false} defaultActiveKey={0} size={'large'}>
        {components.map((c, key) => (
          <TabPane tab={c.name} key={key}>
            <TabContent {...c} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Instructions;
