import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { Tabs, Row, Col } from 'antd';
import Ingredients from './ingredients';
import Steps from './steps';
const { TabPane } = Tabs;

const TabContent = ({ ingredients = [], steps = [], description }) => (
  <Fragment>
    <ReactMarkdown source={description} />
    <Row gutter={[32, 0]}>
        { !!ingredients.length && <Col span={24} md={{ span: 12 }}>
          <Ingredients data={ingredients} />
        </Col>}
       {!!steps.length && <Col span={24} md={{ span: 12 }}>
          <Steps data={steps} />
        </Col>}
      </Row>
  </Fragment>
);

const Instructions = ({ components }) => {
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
