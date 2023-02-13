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
              <div className="relative z-10 sm:w-full sm:max-w-2xl">
                <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 sm:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true">
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>
                <div className="relative py-32 px-6 sm:py-40 lg:py-56">
                  <div className="text-center">
                    {title && <h1 className="text-4xl font-bold sm:text-6xl">{title}</h1>}
                    {description && <p className="mt-4">{description}</p>}
                    <div className="mt-10 flex justify-center">
                      {buttons &&
                        buttons.map(btn => {
                          if (btn._type === 'Social') {
                            return (
                              <Link
                                key={btn.name}
                                href={btn.url}
                                className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                                {btn.name}
                              </Link>
                            );
                          }
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
                <div className="sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2">
                  <Img {...imageProps} className="hidden aspect-[6/2]  object-cover sm:block sm:h-full" alt="" />
                </div>
              )}
            </div>
          ) : (
            <div className="mx-auto mt-24 flex justify-center">
              {buttons &&
                buttons.map(btn => {
                  if (btn._type === 'Social') {
                    return (
                      <Link
                        key={btn.name}
                        href={btn.url}
                        className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                        {btn.name}
                      </Link>
                    );
                  }
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
        <div key={props._key} className="pb-16 sm:relative sm:z-10 sm:px-16">
          {title || description || imageProps ? (
            <div className="sm:mx-auto sm:grid sm:max-w-7xl sm:grid-cols-3 sm:gap-8 sm:px-8">
              <div className="relative sm:-my-8">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 sm:hidden" />
                <div className="mx-auto max-w-md px-6 sm:h-full sm:max-w-3xl sm:p-0">
                  {imageProps && imageProps.src && (
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 sm:aspect-none hidden overflow-hidden rounded-full shadow-2xl sm:block">
                      <Img {...imageProps} className="object-cover sm:h-full sm:w-full" alt="" />
                    </div>
                  )}
                  <h2 className="mt-4 mb-16 hidden text-center text-4xl font-medium sm:block">{title}</h2>
                </div>
              </div>
              <div className=" sm:col-span-2 sm:m-0 sm:pl-8">
                <div className="mx-auto max-w-md px-6 pt-8 sm:max-w-2xl sm:px-0 sm:py-12">
                  <blockquote>
                    <div>
                      <h2 className="text-center text-3xl font-medium sm:hidden">{title}</h2>

                      <p className="text-md mt-6 font-light">{description}</p>
                    </div>
                    <footer className="mt-6">
                      {buttons && (
                        <div className="mt-10 flex justify-center sm:justify-start">
                          {buttons.map(btn => {
                            if (btn._type === 'Social') {
                              return (
                                <Link
                                  key={btn.name}
                                  href={btn.url}
                                  className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                                  {btn.name}
                                </Link>
                              );
                            }
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
            <div className="mx-auto flex justify-center">
              {buttons &&
                buttons.map(btn => {
                  if (btn._type === 'Social') {
                    return (
                      <Link
                        key={btn.name}
                        href={btn.url}
                        className="mx-2 rounded-md border-2 p-2 shadow-xl hover:scale-105">
                        {btn.name}
                      </Link>
                    );
                  }
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
