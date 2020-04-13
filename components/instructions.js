import { Fragment } from 'react';
import { Tabs, Row, Col, Typography } from 'antd';
import Ingredients from './ingredients';
import Steps from './steps';
const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;

const TabContent = ({ ingredients, steps, description }) => (
  <Fragment>
    <Paragraph>{description}</Paragraph>
    <Row gutter={[16, 0]}>
      <Col span={12}>
        <Ingredients data={ingredients} />
      </Col>
      <Col span={12}>
        <Steps data={steps} />
      </Col>
    </Row>
  </Fragment>
);

const Instructions = ({ broth, tare, noodles }) => {
  return (
    <div>
      <Title level={2}>Instructions</Title>
      <Tabs defaultActiveKey="1" size={'large'}>
        <TabPane tab="Broth" key="1">
          <TabContent {...broth} />
        </TabPane>
        <TabPane tab="Tare" key="2">
          <TabContent {...tare} />
        </TabPane>
        <TabPane tab="Noodles" key="3">
          <TabContent {...noodles} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Instructions;
