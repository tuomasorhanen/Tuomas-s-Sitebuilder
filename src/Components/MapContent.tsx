import { IAbout, IHeadingAndTitle, IHero } from '_lib/types';

import AboutSection from './AboutSection';
import HeadingAndTitle from './HeadingAndTitle';
import HeroSection from './HeroSection';

type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[] | IAbout[]
}

const MapContent = (props: IMapContentProps) => {
  const { content } = props;
  return (
    <>
      {content.map((item) => {
        switch (item._type) {
          case 'Hero':
            return <HeroSection key={item._id} {...item} />;
          case 'About':
            return <AboutSection key={item._id} {...item} />;
          case 'HeadingAndTitle':
            return <HeadingAndTitle key={item._id} {...item} />;
          case 'Testimonial':
            return <HeadingAndTitle key={item._id} {...item} />;
          default:
            break;
        }
      })}
    </>
  );
};

export default MapContent;
