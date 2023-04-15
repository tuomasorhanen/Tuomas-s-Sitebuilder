import { IHero } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import Image from 'components/Image';
import ButtonRenderer from 'components/ButtonRenderer';

const HeroSection = (props: IHero) => {
  const { blockContent, image, buttons, layout, opacity } = props;

  switch (layout) {
    case 'image-bg-center':
      return (
        <div
          key={props._key}
          className="relative flex aspect-video max-h-screen w-full items-center justify-center sm:-mt-8">
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div className="z-30 max-w-5xl px-4 text-center">
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-6 flex justify-center">
              {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
            </div>
          </div>
        </div>
      );
    case 'image-bg-left':
      return (
        <div
        key={props._key}
        className="relative flex aspect-video max-h-screen w-full items-center justify-center sm:-mt-8">
        <div className="absolute inset-0 z-10">
          {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="z-30 col-start-1 col-span-1 flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <div className="z-30 max-w-5xl px-4 text-center">
              <BlockContentRenderer blockContent={blockContent && blockContent} />
              <div className="mb-2 mt-6 flex justify-center">
                {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    case 'image-bg-right':
      return (
        <div
          key={props._key}
          className="relative flex aspect-video max-h-screen w-full items-center justify-center sm:-mt-8">
          <div className="absolute inset-0 z-10">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="z-30 col-start-2 flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
              <div className="z-30 max-w-5xl px-4 text-center">
                <BlockContentRenderer blockContent={blockContent && blockContent} />
                <div className="mb-2 mt-6 flex justify-center">
                  {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'hero-grid-carousel':
      return (
        <div key={props._key} className="w-full py-20">
          <div className="grid h-full border-4 md:grid-cols-3 md:grid-rows-4">
            <div className="col-span-2 row-span-4 h-full border">
              {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
            </div>
            <div className="col-span-1 row-span-4 flex justify-center border px-4 py-12 md:row-span-3">
              <BlockContentRenderer blockContent={blockContent && blockContent} />
            </div>
            <div className="col-span-1 row-span-4 flex h-full flex-wrap items-center justify-center border p-4 md:row-span-1">
              {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}{' '}
            </div>
          </div>
        </div>
      );
    case 'image-right':
      return (
        <section key={props._key} className="grid max-w-screen-lg grid-cols-2 items-center gap-8 p-8 py-32">
          <div className="col-span-2 mx-auto sm:col-span-1 ">
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-6">
              {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}{' '}
            </div>
          </div>
          <div className="hidden sm:col-span-1 sm:block">
            {image && <Image {...image} className=" object-cover" alt="" />}
          </div>
        </section>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
