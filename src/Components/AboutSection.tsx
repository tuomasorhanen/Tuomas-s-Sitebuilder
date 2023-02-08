import { IAbout } from '_lib/types';

const AboutSection = (props: IAbout) => {
  const { title, description, buttonText, url, aboutImage } = props;
  return (
    <div
      key={props._key}
      className="bg-white pb-16 lg:relative lg:z-10 lg:pb-0"
    >
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
            <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none hidden overflow-hidden rounded-full shadow-2xl lg:block">
              <img
                className="object-cover lg:h-full lg:w-full"
                src={aboutImage}
                alt=""
              />
            </div>
            <h2 className="mt-4 mb-16 hidden text-center text-4xl font-medium text-black lg:block">
              {title}
            </h2>
          </div>
        </div>
        <div className=" lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-6 pt-8 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-12">
            <blockquote>
              <div>
                <h2 className="text-center text-3xl font-medium text-black lg:hidden">
                  {title}
                </h2>

                <p className="text-md mt-6 font-light text-black">
                  {description}
                </p>
              </div>
              <footer className="mt-6">
                <a
                  href={url}
                  className="rounded-md border-2 border-gray-400 bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-xl hover:scale-110"
                >
                  {buttonText}
                </a>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
