import { Card, Col, Row } from 'antd';

const dataset = [
  { name: 'recipe 1' },
  { name: 'recipe 2' },
  { name: 'recipe 3' },
  { name: 'recipe 4' },
  { name: 'recipe 5' },
];
const RecipeList = ({ data }) => {
  return (
    <Row>
      {dataset.map(({ name }) => (
        <Col span={12} md={{ span: 8 }}>
          <Card title={name}>
            <p>some content</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RecipeList;
