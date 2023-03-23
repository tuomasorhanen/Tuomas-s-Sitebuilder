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
            return (
              <div>
                <HeroSection key={item._id} {...item} defaultColors={defaultColors} />
              </div>
            );
          case 'grid':
            return (
              <div>
                <GridSection key={item._id} {...item} defaultColors={defaultColors} />
              </div>
            );
          case 'HeadingAndTitle':
            return (
              <div>
                <HeadingAndTitle key={item._id} {...item} />
              </div>
            );
          case 'spacer':
            return (
              <div>
                <Spacer key={item._id} {...item} />
              </div>
            );
          case 'uiElement':
            return (
              <div>
                <UiElement key={item._id} {...item} />
              </div>
            );
          case 'blogPost':
            return (
              <div>
                <BlogReferenceSection key={item._id} {...item} />
              </div>
            );
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;
