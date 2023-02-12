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
        <div key={props._key} className="relative">
          {title || description || imageProps ? (
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 lg:w-full lg:max-w-2xl">
                <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 md:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true">
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>
                <div className="relative py-32 px-6 sm:py-40 lg:py-56">
                  <div className="text-center">
                    {title && <h1 className="text-6xl font-bold">{title}</h1>}
                    {description && <p className="mt-4">{description}</p>}
                    <div className="mt-10 flex justify-center">
                      {buttons &&
                        buttons.map(btn => {
                          return (
                            <Link
                              key={btn.navigateToPage}
                              href={btn.navigateToPage}
                              className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                              {btn.callToAction}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              {imageProps && (
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <Img {...imageProps} className="hidden aspect-[6/2]  object-cover lg:block lg:h-full" alt="" />
                </div>
              )}
            </div>
          ) : (
            <div className="mx-auto flex justify-center">
              {buttons &&
                buttons.map(btn => {
                  return (
                    <Link
                      key={btn.navigateToPage}
                      href={btn.navigateToPage}
                      className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                      {btn.callToAction}
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      );
    case 'circle-left':
      return (
        <div key={props._key} className="pb-16 lg:relative lg:z-10 lg:pb-0">
          {title || description || imageProps ? (
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="relative lg:-my-8">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 lg:hidden" />
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                  {imageProps && imageProps.src && (
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none hidden overflow-hidden rounded-full shadow-2xl lg:block">
                      <Img {...imageProps} className="object-cover lg:h-full lg:w-full" alt="" />
                    </div>
                  )}
                  <h2 className="mt-4 mb-16 hidden text-center text-4xl font-medium lg:block">{title}</h2>
                </div>
              </div>
              <div className=" lg:col-span-2 lg:m-0 lg:pl-8">
                <div className="mx-auto max-w-md px-6 pt-8 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-12">
                  <blockquote>
                    <div>
                      <h2 className="text-center text-3xl font-medium lg:hidden">{title}</h2>

                      <p className="text-md mt-6 font-light">{description}</p>
                    </div>
                    <footer className="mt-6">
                      {buttons && (
                        <div className="mt-10 flex justify-center lg:justify-start">
                          {buttons.map(btn => {
                            return (
                              <div key={btn.navigateToPage} className="flex">
                                <Link
                                  href={btn.navigateToPage}
                                  className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                                  {btn.callToAction}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              {buttons &&
                buttons.map(btn => {
                  return (
                    <Link
                      key={btn.navigateToPage}
                      href={btn.navigateToPage}
                      className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                      {btn.callToAction}
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
