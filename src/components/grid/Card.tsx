// Card.tsx
import { ICard, IColor } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import Image from 'components/Image';

const Card = (props: ICard) => {
  const { blockContent, image, layout, opacity } = props;

  const overlayOpacity = opacity ? opacity / 100 : 1;

  switch (layout) {
    case 'simple':
      return (
        <div
          key={props._key}
          className="rounded-lg border-2 border-highlight bg-bg p-6 shadow-2xl">
          <div className="mt-4 text-text">
            <BlockContentRenderer blockContent={blockContent} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 pt-4">
              <Image {...image} alt="" className="h-12 w-12 rounded-full object-cover" />
            </div>
          </div>
        </div>
      );
    case 'image-top':
      return (
        <div key={props._key} className="grid p-4">
          <div className="rounded-lg border shadow-md bg-bg border-highlight ">
            <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
            <div className="py-4 px-6 text-text">
              <BlockContentRenderer blockContent={blockContent} />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default Card;
