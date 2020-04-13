import { Typography, List, Checkbox } from 'antd';
const { Title, Text } = Typography;

const Ingredients = ({ data = [] }) => {
  return (
    <List
      size="medium"
      header={<Title level={4}>Ingredients</Title>}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Checkbox>
            <Text>{item}</Text>
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default Ingredients;
