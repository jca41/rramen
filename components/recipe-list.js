import { Card, Col, Row } from 'antd';
import Link from 'next/link';

import { ROUTES } from '../constants';

const { Meta } = Card;

const RecipeList = ({ data }) => {
  return (
    <Row>
      {data.map(({ title, slug, image, author }) => (
        <Col key={title} span={12} md={{ span: 8 }}>
          <Link href={ROUTES.recipes.href} as={slug}>
            <Card className={'recipe-list__item'} hoverable cover={<img alt={title} src={image} />}>
              <Meta title={title} description={author.name && `u/${author.name}`} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default RecipeList;
