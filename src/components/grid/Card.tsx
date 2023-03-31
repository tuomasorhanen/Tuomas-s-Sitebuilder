// Card.tsx
import { ICard } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import Image from 'components/Image';
import Link from 'next/link';

const Card = (props: ICard) => {
  const { blockContent, image, layout, opacity, buttons } = props;

  switch (layout) {
    case 'simple':
      return (
        <div key={props._key} className="rounded-lg border-2 border-highlight p-6 shadow-2xl">
          <div className="mt-4">
            <BlockContentRenderer blockContent={blockContent} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 pt-4">
              <Image {...image} alt="" className="h-12 w-12 object-cover" />
            </div>
          </div>
        </div>
      );
    case 'image-top':
      return (
        <div key={props._key}>
          <div className="rounded-lg border border-highlight shadow-lg ">
            <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" opacity={opacity} />
            <div className="px-6 pb-8 pt-4">
              <BlockContentRenderer blockContent={blockContent} />
            </div>
          </div>
          <div className="-mt-6 flex justify-center">
            {buttons &&
              buttons.map(btn => {
                return (
                  <Link
                    key={btn.navigateToPage}
                    href={btn.navigateToPage ? btn.navigateToPage : '/home'}
                    className="button">
                    {btn.callToAction}
                  </Link>
                );
              })}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default Card;
