import { client } from '_lib/client';
import { IHero } from '_lib/types';
import Image from 'components/Image';
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
    case 'simple-right':
      return (
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                {title}
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                {description}
              </p>
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
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <Img {...imageProps} className="hidden aspect-[6/2]  object-cover sm:block sm:h-full" alt="" />
            </div>
          </div>
        </section>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
