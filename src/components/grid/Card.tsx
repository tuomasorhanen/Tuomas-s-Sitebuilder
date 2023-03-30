// Card.tsx
import { ICard} from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import Image from 'components/Image';
import Link from 'next/link';

const Card = (props: ICard) => {
  const { blockContent, image, layout, opacity, buttons } = props;

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
              <Image {...image} alt="" className="h-12 w-12 object-cover" />
            </div>
          </div>
        </div>
      );
    case 'image-top':
      return (
        <div key={props._key} className="grid p-4">
          <div className="rounded-lg border shadow-md bg-bg border-highlight ">
            <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" opacity={opacity} />
            <div className="py-4 px-6 text-text">
              <BlockContentRenderer blockContent={blockContent} />
            </div>
          </div>
          <div className='flex justify-center -mt-5'>
              {buttons &&
                    buttons.map(btn => {
                      return (
                        <Link
                          key={btn.navigateToPage}
                          href={btn.navigateToPage ? btn.navigateToPage : '/home'}
                          className="relative inline-block mx-2 bg-bg rounded-full border-2 border-highlight border-b-power border-r-power py-2 px-4 text-xl text-text shadow-xl hover:scale-105">
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
