import { IReference, ITestimonial } from '_lib/types';

type ITestimonialSectionProps = ITestimonial & IReference & {
    key: string;
  };

const TestimonialSection = (props: ITestimonialSectionProps) => {
  const { referenceImage, quote, company, person } = props as ITestimonial;
  const { key, _ref } = props;

  if (_ref) {
    return <h1>{JSON.stringify(props)}</h1>
  } else {
    return (
      <div key={key} className="bg-gray-900 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-8 lg:px-8 ">
          <div className="text-md max-w-3xl px-12 pb-12 text-center font-light leading-9 text-gray-100 md:pb-20">
            <div className=" ">
              <div className="flex justify-center">
                <div className="md:flex-shrink-0">
                  <img className="mb-4 h-20 w-20 rounded-full shadow-xl" src={referenceImage} alt="" />
                </div>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-medium text-white">{company.name}</h1>
            <p>&ldquo;{quote}&rdquo;</p>
            <p className="text-md font-light text-white">
              {person.role} / {person.name}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default TestimonialSection;
