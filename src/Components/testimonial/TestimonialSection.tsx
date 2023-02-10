import { IReference, ITestimonial } from '_lib/types';

type ITestimonialSectionProps = ITestimonial &
  IReference & {
    key: string;
  };

const TestimonialSection = (props: ITestimonialSectionProps) => {
  const { referenceImage, quote, company, person } = props as ITestimonial;
  const { key, _ref } = props;

  if (_ref) {
    return (
      <div key={key} className="aspect-[4/3] h-full">
        <div className="text-center text-sm">
          <img className="m-auto h-16 w-16 rounded-full shadow-xl" src={referenceImage} alt="" />
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
          <img className="m-auto h-16 w-16 rounded-full shadow-xl" src={referenceImage} alt="" />
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
