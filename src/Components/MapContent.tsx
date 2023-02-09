import { IAbout, IHeadingAndTitle, IHero } from '_lib/types';
import BlogReferenceSection from './blog/BlogReferenceSection';

import HeadingAndTitle from './HeadingAndTitle';
import HeroSection from './hero/HeroSection';
import TestimonialSection from './testimonial/TestimonialSection';

type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[] | IAbout[];
};

const MapContent = (props: IMapContentProps) => {
  const { content } = props;

  return (
    <>
      {content.map(item => {
        switch (item._type) {
          case 'Hero':
            return <HeroSection key={item._id} {...item} />;
          case 'HeadingAndTitle':
            return <HeadingAndTitle key={item._id} {...item} />;
          case 'Testimonial':
            return <TestimonialSection key={item._id} {...item} />;
          case 'blogPost':
            return <BlogReferenceSection key={item._id} {...item} />;
          default:
            break;
        }
      })}
    </>
  );
};

export default MapContent;
