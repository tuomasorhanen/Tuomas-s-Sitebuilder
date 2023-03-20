import { IHero } from '_lib/types';
import Image from 'components/Image';
import Link from 'next/link';

const HeroSection = (props: IHero) => {
  const { title, description, image, buttons, layout } = props;

  switch (layout) {
    case 'slash-right':
      return (
        <div
          key={props._key}
          className="relative flex items-center justify-center aspect-video w-full max-h-screen xs:-mt-20"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-30 z-10">
            <Image {...image} className="w-full h-full object-cover " alt="" />
          </div>
          <div className="z-10 text-center">
            <h1 className="text-4xl font-bold xs:text-4xl sm:text-6xl">{title}</h1>
            <p className="mt-2 xs:text-2xl max-w-5xl p-4">{description}</p>
            <div className="mt-6 mb-2 ">
              {buttons &&
                buttons.map((btn) => {
                  return (
                    <Link
                      key={btn.navigateToPage}
                      href={btn.navigateToPage}
                      className="mx-2 rounded-md border-2 border-gray-200 p-2 text-xl text-white font-bold shadow-xl hover:scale-105"
                    >
                      {btn.callToAction}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
