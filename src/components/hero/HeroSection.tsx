import { IHero } from '_lib/types';
import Image from 'components/Image';
import Link from 'next/link';

const HeroSection = (props: IHero) => {
  const { title, description, image, buttons, layout, bgColor, highlightColor, textColor, opacity } = props;

  const overlayOpacity = opacity ? opacity / 100 : 1;
  const bgColorStyle = bgColor
    ? { backgroundColor: `${bgColor.hex}`, opacity: overlayOpacity }
    : { backgroundColor: 'black', opacity: overlayOpacity };
  const textColorStyle = textColor ? { color: textColor.hex } : {};
  const highlightColorStyle = highlightColor ? { borderColor: highlightColor.hex } : {};

  switch (layout) {
    case 'image-bg':
      return (
        <div
          key={props._key}
          className="relative flex aspect-video max-h-screen w-full items-center justify-center xs:-mt-20">
          <div className="absolute top-0 left-0 z-10 h-full w-full">
            <Image {...image} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="absolute top-0 left-0 z-20 h-full w-full" style={bgColorStyle}></div>
          <div className="z-30 text-center">
            <h1 className="text-4xl font-bold xs:text-4xl sm:text-6xl" style={textColorStyle}>
              {title}
            </h1>
            <p className="mt-2 max-w-5xl p-4 xs:text-2xl" style={textColorStyle}>
              {description}
            </p>
            <div className="mt-6 mb-2">
              {buttons &&
                buttons.map(btn => {
                  return (
                    <Link
                      key={btn.navigateToPage}
                      href={btn.navigateToPage}
                      className="mx-2 rounded-md border-2 p-2 text-xl font-bold shadow-xl hover:scale-105"
                      style={{ ...textColorStyle, ...highlightColorStyle }}>
                      {btn.callToAction}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      );
    case 'image-right':
      return (
        <div key={props._key} className="flex flex-col md:flex-row">
          <div
            className="flex items-center justify-center md:w-1/2"
            style={{ backgroundColor: `${bgColor.hex}${Math.round(bgColor.alpha * 255).toString(16)}` }}>
            <div className="text-center">
              <h1 className="text-4xl font-bold xs:text-4xl sm:text-6xl" style={textColorStyle}>
                {title}
              </h1>
              <p className="mt-2 max-w-5xl p-4 xs:text-2xl" style={textColorStyle}>
                {description}
              </p>
              <div className="mt-6 mb-2">
                {buttons &&
                  buttons.map(btn => {
                    return (
                      <Link
                        key={btn.navigateToPage}
                        href={btn.navigateToPage}
                        className="mx-2 rounded-md border-2 p-2 text-xl font-bold shadow-xl hover:scale-105"
                        style={{ ...textColorStyle, ...highlightColorStyle }}>
                        {btn.callToAction}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="relative md:w-1/2" style={bgColorStyle}>
            <Image {...image} className="h-full w-full object-cover" alt="" />
          </div>
        </div>
      );
    case 'image-left':
      return (
        <div key={props._key} className="flex flex-col md:flex-row">
          <div className="relative md:w-1/2">
            <Image {...image} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <div className="z-10 text-center">
              <h1 className="text-4xl font-bold xs:text-4xl sm:text-6xl">{title}</h1>
              <p className="mt-2 max-w-5xl p-4 xs:text-2xl">{description}</p>
              <div className="mt-6 mb-2">
                {buttons &&
                  buttons.map(btn => {
                    return (
                      <Link
                        key={btn.navigateToPage}
                        href={btn.navigateToPage}
                        className="mx-2 rounded-md border-2 border-gray-200 p-2 text-xl font-bold text-white shadow-xl hover:scale-105">
                        {btn.callToAction}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      );
    case 'new-hero':
      return (
        <div className="bg-white">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-200/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-900/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl md:mx-0 md:grid md:max-w-none md:grid-cols-2 md:gap-x-16 md:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:col-span-2 xl:col-auto">
                  {title}
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-gray-600">{description}</p>
                  <div className="mt-10 flex items-center gap-x-6">
                    {buttons &&
                      buttons.map(btn => {
                        return (
                          <Link
                            key={btn.navigateToPage}
                            href={btn.navigateToPage}
                            className=" rounded-md border-2 border-gray-700 p-2 text-xl font-bold text-black shadow-xl hover:scale-105">
                            {btn.callToAction}
                          </Link>
                        );
                      })}
                  </div>
                </div>
                <Image
                  {...image}
                  className="mt-10 aspect-[6/5] w-full max-w-lg rounded-lg object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
