import { IColor, IHeadingAndTitle, IHero } from '_lib/types';
import BlogReferenceSection from './blog/BlogReferenceSection';
import BlogSection from './blog/BlogSection';
import GridSection from './grid/GridSection';
import HeadingAndTitle from './Heading and Title/HeadingAndTitle';
import HeroSection from './hero/HeroSection';
import CustomButton from './landingPage/CustomButton';
import SocialSection from './Social Links/SocialSection';
import UiElement from './UI elements/uiElements';

type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[];
};

const MapContent = ({ content}: IMapContentProps) => {
  return (
    <div>
      {content.map(item => {
        switch (item._type) {
          case 'Hero':
            return <HeroSection key={item._key} {...item} />;
          case 'grid':
            return <GridSection key={item._key} {...item} />;
          case 'HeadingAndTitle':
            return <HeadingAndTitle key={item._key} {...item} />;
          case 'uiElement':
            return <UiElement key={item._key} {...item} />;
          case 'customButton':
            return <CustomButton key={item._key} {...item} />;
          case 'socialButton':
            return <SocialSection key={item._key} {...item} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;
