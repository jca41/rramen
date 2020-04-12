import { List, Header } from 'semantic-ui-react';
import { Typography } from 'antd';
const { Title } = Typography;

const ListComponent = ({ name, data = [], ...props }) => {
  return (
    <div>
      <Title level={3}>{`${name}:`}</Title>
      <List {...props}>
        {data.map((name) => (
          <List.Item key={name}>{name}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default ListComponent;
