import { IHeadingAndTitle, IHero } from '_lib/types';
import BlogReferenceSection from './blog/BlogReferenceSection';
import ContactsSection from './Contacts';
import HeadingAndTitle from './HeadingAndTitle';
import HeroSection from './hero/HeroSection';
import ServiceSection from './ServiceSection';
import TestimonialSection from './testimonial/TestimonialSection';

type IMapContentProps = {
  content: IHero[] | IHeadingAndTitle[];
};

const MapContent = (props: IMapContentProps) => {
  const { content } = props;

  return (
    <div className="grid grid-cols-12 gap-6 px-24">
      {content.map(item => {
        switch (item._type) {
          case 'Hero':
            return (
              <div className="col-start-1 col-end-13 -mx-24 -mt-6">
                <HeroSection key={item._id} {...item} />
              </div>
            );
          case 'HeadingAndTitle':
            return (
              <div className="col-start-1 col-end-13">
                <HeadingAndTitle key={item._id} {...item} />
              </div>
            );
          case 'Testimonial':
            return (
              <div className="col-span-12 xs:col-span-6 ">
                <TestimonialSection key={item._id} {...item} />
              </div>
            );
          case 'blogPost':
            return (
              <div className="col-span-12 xs:col-span-6 sm:col-span-4">
                <BlogReferenceSection key={item._id} {...item} />
              </div>
            );
          case 'service':
            return (
              <div className="col-span-12 sm:col-span-6">
                <ServiceSection key={item._id} {...item} />
              </div>
            );
          case 'Contacts':
            return (
              <div className="col-start-1 col-end-13 -mx-24 -mt-6">
                <ContactsSection key={item._id} {...item} />
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
