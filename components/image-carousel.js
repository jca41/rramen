import { Carousel } from 'antd';

const ImageCarousel = ({ data = [] }) => {
  return (
    <div>
      <Carousel className={'image-carousel'} acessibility>
        {data.map((image) => (
          <div key={image} className={'image-carousel__slide'}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
