// Card.tsx
import { ICard } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import Image from 'components/Image';
import Link from 'next/link';

const Card = (props: ICard) => {
  const { blockContent, image, layout, buttons } = props;

  switch (layout) {
    case 'simple':
      return (
        <div key={props._key} className="rounded-lg border-2 p-6 shadow-2xl">
          <BlockContentRenderer blockContent={blockContent} />
        </div>
      );
    case 'image-top':
      return (
        <div key={props._key}>
          {image && (
            <div className="rounded-lg shadow-lg ">
              <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
              <div className="px-6 pb-8 pt-4">
                <BlockContentRenderer blockContent={blockContent} />
              </div>
            </div>
          )}
          {buttons.length > 0 && (
            <div className="-mt-6 flex justify-center">
              {buttons.map(btn => {
                if (btn.linkType === 'internal') {
                  return (
                    <Link key={btn.navigateToPage} href={btn.navigateToPage || '/home'}>
                      {btn.image ? (
                        <Image {...btn.image} alt="" className="h-12 w-12 object-cover" />
                      ) : (
                        <span className="button">{btn.callToAction}</span>
                      )}
                    </Link>
                  );
                } else if (btn.linkType === 'external') {
                  return (
                    <a key={btn.navigateToUrl} href={btn.navigateToUrl} target="_blank" rel="noopener noreferrer">
                      {btn.image ? (
                        <Image {...btn.image} alt="" className="h-12 w-12 object-cover" />
                      ) : (
                        <span className="button">{btn.callToAction}</span>
                      )}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      );
    default:
      return <></>;
  }
};

export default Card;
