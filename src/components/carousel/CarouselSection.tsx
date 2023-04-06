import { ICarousel, ISimpleImage} from '_lib/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ImageGallery from './ImageGallery';

SwiperCore.use([Navigation]);

const CarouselSection = (props: ICarousel) => {
  const {items} = props;

  const renderCarouselItem = (item: ICarousel | ISimpleImage) => {
    if (item._type === 'simpleImage') {
      return <ImageGallery {...item as ISimpleImage} />;
    } else {
      return <></>;
    }
  };

  const itemsArray = Array.isArray(items) ? items : [items];

    return (
      <div className=''>
      <Swiper
      slidesPerView={3}
      spaceBetween={8}
      navigation
      loop={true}
      className="mySwiper"
    >
      {items.map((item) => (
        <SwiperSlide key={item._id}>
          <div className="flex justify-center py-2">
          {renderCarouselItem(item)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
    );
  };

export default CarouselSection;
