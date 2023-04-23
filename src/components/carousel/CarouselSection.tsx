import { ICarousel, IHero, ISimpleImage } from '_lib/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, EffectCoverflow, EffectCards, EffectCreative, EffectFade, EffectFlip, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import ImageGallery from './ImageGallery';
import HeroSection from 'components/hero/HeroSection';

SwiperCore.use([Navigation, Autoplay, EffectCoverflow, EffectCards, EffectCreative, EffectFade, EffectFlip, Pagination]); // Add EffectCoverflow here

const CarouselSection = (props: ICarousel) => {
  const { items, slidesPerView, spaceBetween, navigation, loop, autoplay, speed, delay, disableOnInteraction, effect, pagination, centeredSlides } = props;

  const renderCarouselItem = (item: ICarousel | ISimpleImage | IHero, index: number) => {
    if (item._type === 'simpleImage') {
      return <ImageGallery key={`imageGallery-${index}`} {...(item as ISimpleImage)} />;
    } else if (item._type === 'hero') {
      return <HeroSection key={`heroSection-${index}`} {...(item as IHero)} />;
    } else {
      return <></>;
    }
  };

  const itemsArray = Array.isArray(items) ? items : [items];

  const { small, medium, large, extraLarge } = slidesPerView;
  const smallSlides = parseInt(small);
  const mediumSlides = parseInt(medium);
  const largeSlides = parseInt(large);
  const extraLargeSlides = parseInt(extraLarge);

  return (
    <div className="">
      <Swiper
        effect={effect}
        breakpoints={{
          0: { slidesPerView: smallSlides },
          700: { slidesPerView: mediumSlides },
          1100: { slidesPerView: largeSlides },
          1920: { slidesPerView: extraLargeSlides },
        }}
        spaceBetween={spaceBetween}
        navigation={navigation}
        pagination={pagination}
        loop={loop}
        centeredSlides={centeredSlides}
        speed={speed}
        autoplay={autoplay ? { delay, disableOnInteraction } : false}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, EffectCards, EffectCreative, EffectFade, EffectFlip]}>
        {itemsArray.map((item, index) => (
          <SwiperSlide key={item._key}>
            <div className="flex justify-center py-8">{renderCarouselItem(item, index)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
