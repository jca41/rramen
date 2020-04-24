import { Card, Col, Row } from 'antd';
import Link from 'next/link';

import { ROUTES } from '../constants';

const { Meta } = Card;

const RecipeList = ({ data }) => {
  return (
    <div className={'recipe-list'}>
    <Row gutter={[40, 40]}>
      {data.map(({ title, slug, image, author }) => (
        <Col key={title} span={24} md={{span: 12}} lg={{ span: 8 }}>
          <Link href={ROUTES.recipes.href} as={slug}>
            <Card hoverable className={'recipe-list__item'} cover={<div className={'recipe-list__item__img-container'}><img alt={title} src={image} /></div>}>
              <Meta title={title} description={author.name && `u/${author.name}`} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default RecipeList;
