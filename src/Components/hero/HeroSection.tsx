import { client } from '_lib/client';
import { IHero } from '_lib/types';
import Img from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';

const HeroSection = (props: IHero) => {
  const { title, description, image, buttons, layout } = props;

  const imageProps = useNextSanityImage(client, image);

  switch (layout) {
    case 'slash-right':
      return (
        <div key={props._key} className="relative bg-gray-900">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true">
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
                <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-start">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">{title}</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-100">{description}</p>

                  <div className="flex justify-center lg:justify-start">
                    <div className="mt-10 flex items-center gap-x-6">
                      {buttons &&
                        buttons.map(btn => {
                          return (
                            <div key={btn.navigateToPage} className="flex justify-center lg:justify-start">
                              <div className="mt-10 flex items-center gap-x-6">
                                <Link
                                  href={btn.navigateToPage}
                                  className="rounded-md bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800">
                                  {btn.callToAction}
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Img {...imageProps} className="hidden aspect-[6/2] w-full object-cover  lg:block lg:h-full" alt="" />
          </div>
        </div>
      );
    case 'circle-left':
      return (
        <div key={props._key} className="bg-white pb-16 lg:relative lg:z-10 lg:pb-0">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none hidden overflow-hidden rounded-full shadow-2xl lg:block">
                  <Img {...imageProps} className="object-cover lg:h-full lg:w-full" alt="" />
                </div>
                <h2 className="mt-4 mb-16 hidden text-center text-4xl font-medium text-black lg:block">{title}</h2>
              </div>
            </div>
            <div className=" lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-6 pt-8 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-12">
                <blockquote>
                  <div>
                    <h2 className="text-center text-3xl font-medium text-black lg:hidden">{title}</h2>

                    <p className="text-md mt-6 font-light text-black">{description}</p>
                  </div>
                  <footer className="mt-6">
                    {buttons &&
                      buttons.map(btn => {
                        return (
                          <div key={btn.navigateToPage} className="flex justify-center lg:justify-start">
                            <div className="mt-10 flex items-center gap-x-6">
                              <Link
                                href={btn.navigateToPage}
                                className="rounded-md border-2 border-gray-400 bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-xl hover:scale-110">
                                {btn.callToAction}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default HeroSection;
