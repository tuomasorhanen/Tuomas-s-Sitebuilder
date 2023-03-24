import { IColor, IHeadingAndTitle, IHero } from '_lib/types';

import BlogReferenceSection from './blog/BlogReferenceSection';
import GridSection from './grid/GridSection';
import HeadingAndTitle from './Heading and Title/HeadingAndTitle';
import HeroSection from './hero/HeroSection';
import Spacer from './spacer/spacer';
import UiElement from './UI elements/uiElements';

type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[];
  defaultColors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
};

const MapContent = ({ content, defaultColors }: IMapContentProps) => {
  return (
    <div>
      {content.map(item => {
        switch (item._type) {
          case 'Hero':
            return <HeroSection key={item._key} {...item} defaultColors={defaultColors} />;
          case 'grid':
            return <GridSection key={item._key} {...item} defaultColors={defaultColors} />;
          case 'HeadingAndTitle':
            return <HeadingAndTitle key={item._key} {...item} />;
          case 'spacer':
            return <Spacer key={item._key} {...item} />;
          case 'uiElement':
            return <UiElement key={item._key} {...item} />;
          case 'blogPost':
            return <BlogReferenceSection key={item._key} {...item} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;
