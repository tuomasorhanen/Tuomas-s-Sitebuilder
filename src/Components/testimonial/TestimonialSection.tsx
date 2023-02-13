import { client } from '_lib/client';
import { IReference, ITestimonial } from '_lib/types';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

type ITestimonialSectionProps = ITestimonial &
  IReference & {
    key: string;
  };

const TestimonialSection = (props: ITestimonialSectionProps) => {
  const { quote, company, person } = props as ITestimonial;
  const { image } = person;
  const { key, _ref } = props;

  const imageProps = useNextSanityImage(client, image);

  if (_ref) {
    return (
      <div className="sm:px-16">
        <div key={key} className="mx-auto my-12 text-center">
          <Img {...imageProps} className="mx-auto h-32 w-32 rounded-full shadow-xl" alt="" />
          <h2 className="mt-8 text-4xl">{company.name}</h2>
          <h2 className="mt-4 font-light tracking-widest">{quote}</h2>
          <p className="mt-4">
            {person.role} / {person.name}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sm:px-16">
        <div key={key} className="mx-auto my-12 text-center">
          <Img {...imageProps} className="mx-auto h-32 w-32 rounded-full shadow-xl" alt="" />
          <h2 className="mt-8 text-4xl">{company.name}</h2>
          <h2 className="mt-4 font-light tracking-widest">{quote}</h2>
          <p className="mt-4">
            {person.role} / {person.name}
          </p>
        </div>
      </div>
    );
  }
};

export default TestimonialSection;
