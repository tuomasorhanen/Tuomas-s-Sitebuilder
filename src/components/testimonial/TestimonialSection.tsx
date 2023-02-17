import { IReference, ITestimonial } from '_lib/types';

import Image from '../Image';

type ITestimonialSectionProps = ITestimonial & IReference & {};

const TestimonialSection = (props: ITestimonialSectionProps) => {
  const { quote, company, person } = props as ITestimonial;
  const { _ref } = props;

  if (_ref) {
    return (
      <div key={props._key} className="mx-auto px-4 ">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-2xl ">
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">{company.name}</h2>
            <p className="mt-2 font-light text-gray-300">{quote}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image {...person.image} alt="" className="h-12 w-12 rounded-full object-cover" />

              <span className="text-sm text-gray-400">
                {person.name} / {person.role}
              </span>
            </div>
          </div>
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
