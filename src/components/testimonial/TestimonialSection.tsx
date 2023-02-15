import { IReference, ITestimonial } from '_lib/types';

import Image from '../Image';

type ITestimonialSectionProps = ITestimonial & IReference & {};

const TestimonialSection = (props: ITestimonialSectionProps) => {
  const { quote, company, person } = props as ITestimonial;
  const { _ref } = props;

  if (_ref) {
    return (
      <div key={props._key} className="sm:px-16">
        <div className="mx-auto my-12 text-center">
          <Image {...person.image} className="mx-auto h-32 w-32 rounded-full shadow-xl" alt="" />
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
      <div key={props._key} className="sm:px-16">
        <div className="mx-auto my-12 text-center">
          <Image {...person.image} className="mx-auto h-32 w-32 rounded-full shadow-xl" alt="" />
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
