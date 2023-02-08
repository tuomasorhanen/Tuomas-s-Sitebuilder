import { IHero } from '_lib/types';

const HeroSection = (props: IHero) => {
  const {
    title,
    description,
    buttonText1,
    url1,
    buttonText2,
    url2,
    heroImage,
  } = props;
  return (
    <div key={props._key} className="relative bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-start">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                {description}
              </p>
              {(buttonText1 || buttonText2) && (
                <div className="flex justify-center lg:justify-start">
                  <div className="mt-10 flex items-center gap-x-6">
                    {buttonText1 && (
                      <a
                        href={url1}
                        className="rounded-md bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                      >
                        {buttonText1}
                      </a>
                    )}
                    {buttonText2 && (
                      <a
                        href={url2}
                        className="text-base font-semibold leading-7 text-white"
                      >
                        {buttonText2} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="hidden aspect-[6/2] w-full object-cover  lg:block lg:h-full"
          src={heroImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
