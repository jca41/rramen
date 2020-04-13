import { Carousel } from 'antd';

const Slide = () => {
  return (
    <div className={'image-carousel__slide'}>
      <img src={'https://i.imgur.com/q8zp0wA.jpg'} />
    </div>
  );
};
const ImageCarousel = ({ data = [] }) => {
  return (
    <div>
      <Carousel className={'image-carousel'} acessibility>
        {data.map((image) => (
          <div className={'image-carousel__slide'}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
