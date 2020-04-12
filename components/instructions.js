import { Fragment } from 'react';
import { Tabs, Row, Col, Typography } from 'antd';
import { Header } from 'semantic-ui-react';
import List from './list';

const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;

const Steps = ({ ingredients, steps, description }) => (
  <Fragment>
    <Paragraph>{description}</Paragraph>
    <Row gutter={[16, 0]}>
      <Col span={12}>
        <List size={'large'} relaxed name={'Ingredients'} data={ingredients} bulleted />
      </Col>
      <Col span={12}>
        <List size={'big'} relaxed={'very'} name={'Steps'} data={steps} ordered />
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
          <Steps {...broth} />
        </TabPane>
        <TabPane tab="Tare" key="2">
          <Steps {...tare} />
        </TabPane>
        <TabPane tab="Noodles" key="3">
          <Steps {...noodles} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Instructions;
