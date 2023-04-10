import { ICarousel, IHero, ISimpleImage } from '_lib/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ImageGallery from './ImageGallery';
import HeroSection from 'components/hero/HeroSection';

SwiperCore.use([Navigation]);

const CarouselSection = (props: ICarousel) => {
  const { items, slidesPerView, spaceBetween, navigation, loop, autoplay, speed, delay, disableOnInteraction } = props;

  const renderCarouselItem = (item: ICarousel | ISimpleImage | IHero) => {
    if (item._type === 'simpleImage') {
      return <ImageGallery {...(item as ISimpleImage)} />;
    } else if (item._type === 'hero') {
      return <HeroSection {...(item as IHero)} />;
    } else {
      return <></>;
    }
  };

  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className="">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={navigation}
        loop={loop}
        speed={speed}
        autoplay={autoplay ? { delay, disableOnInteraction } : false}
        modules={[Navigation, Autoplay]}>
        {items.map(item => (
          <SwiperSlide key={item._id}>
            <div className="flex justify-center py-2">{renderCarouselItem(item)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
