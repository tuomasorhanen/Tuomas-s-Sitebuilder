import { useNextSanityImage } from 'next-sanity-image';
import { client } from '_lib/client';
import { IReference, ITestimonial } from '_lib/types';
import Img from 'next/image';

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
      <div key={key} className="aspect-[4/3] h-full">
        <div className="text-center text-sm">
          <Img {...imageProps} className="m-auto h-16 w-16 rounded-full shadow-xl" alt="" />
          <h1 className="mt-4 text-3xl ">{company.name}</h1>
          <p className="mt-4">{quote}</p>
          <p className="mt-4">
            {person.role} / {person.name}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div key={key} className="aspect-[4/3] h-full">
        <div className="text-center text-sm">
          <Img {...imageProps} className="m-auto h-16 w-16 rounded-full shadow-xl" alt="" />
          <h1 className="mt-4 text-3xl ">{company.name}</h1>
          <p className="mt-4">{quote}</p>
          <p className="mt-4">
            {person.role} / {person.name}
          </p>
        </div>
      </div>
    );
  }
};

export default TestimonialSection;
