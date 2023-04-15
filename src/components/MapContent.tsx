import { ICarousel, IHeadingAndTitle, IHero } from '_lib/types';
import GridSection from './grid/GridSection';
import HeadingAndTitle from './Heading and Title/HeadingAndTitle';
import HeroSection from './hero/HeroSection';
import CustomButton from './landingPage/CustomButton';
import UiElement from './UI elements/uiElements';
import CarouselSection from './carousel/CarouselSection';
import BotSection from './bot/botSection';

type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[] | ICarousel[];
};

const MapContent = ({ content}: IMapContentProps) => {
  return (
    <div>
      {content.map(item => {
        console.log(item)
        switch (item._type) {
          case 'hero':
            return <HeroSection key={item._key} {...item} />;
          case 'grid':
            return <GridSection key={item._key} {...item} />;
          case 'headingAndTitle':
            return <HeadingAndTitle key={item._key} {...item} />;
          case 'uiElement':
            return <UiElement key={item._key} {...item} />;
          case 'customButton':
            return <CustomButton key={item._key} {...item} />;
          case 'carousel':
            return <CarouselSection key={item._key} {...item} />;
          case 'bot':
            return <BotSection key={item._key} {...item} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;
