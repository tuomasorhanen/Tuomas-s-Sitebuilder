import { IHero } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import Image from 'components/Image';
import ButtonRenderer from 'components/ButtonRenderer';

const HeroSection = (props: IHero) => {
  const { blockContent, image, buttons, layout, opacity } = props;

  switch (layout) {
    case 'image-bg-center':
      return (
        <div key={props._key} className="relative flex aspect-video max-h-screen w-full items-center justify-center">
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div className="z-30 max-w-5xl px-4 text-center">
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-6 flex h-full items-center justify-center">
              {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
            </div>
          </div>
        </div>
      );
    case 'circle-overlap-left':
      return (
        <div key={props._key} className=" pb-16 md:relative md:z-10 md:px-16">
          <div className="md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-8 md:px-8">
            <div className="relative md:col-span-1 md:mx-auto md:-my-8">
              <div className="hidden md:block mx-auto max-w-md px-4 mt-8 md:mt-0 md:h-full md:max-w-3xl md:p-0">
                {image && (
                  <Image {...image} className="aspect-square w-80 rounded-full object-cover" alt="" opacity={opacity} />
                )}
                <div className="flex justify-center pt-8">
                  {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mx-auto max-w-4xl px-6 pt-16 md:pt-8 text-center md:text-left">
                <div>
                  <BlockContentRenderer blockContent={blockContent && blockContent} />
                </div>
              </div>
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
            <div className="z-30 col-span-1 col-start-1 flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
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
    case 'image-right':
      return (
        <section key={props._key} className="grid max-w-7xl grid-cols-2 items-center gap-8 p-8 py-32">
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
