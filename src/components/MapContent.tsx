import { IHeadingAndTitle, IHero } from '_lib/types';
import GridSection from './grid/GridSection';
import HeadingAndTitle from './Heading and Title/HeadingAndTitle';
import HeroSection from './hero/HeroSection';
import CustomButton from './landingPage/CustomButton';
import UiElement from './UI elements/uiElements';


type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[];
};

const MapContent = ({ content}: IMapContentProps) => {
  return (
    <div>
      {content.map(item => {
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
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;
