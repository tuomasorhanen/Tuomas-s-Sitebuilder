// Card.tsx
import { ICard } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import ButtonRenderer from 'components/ButtonRenderer';
import Image from 'components/Image';

const Card = (props: ICard) => {
  const { blockContent, image, layout, buttons } = props;

  switch (layout) {
    case 'simple':
      return (
        <div key={props._key} className="border-2 p-6 shadow-2xl">
        <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      );
    case 'image-top':
      return (
        <div key={props._key}>
          {image && (
            <div className="shadow-lg borderstyle">
              <Image {...image} alt="" className="h-48 w-full object-cover" />
              <div className="px-6 pb-8 pt-4">
              <BlockContentRenderer blockContent={blockContent && blockContent} />
              </div>
            </div>
          )}
          <div className="-mt-6 flex justify-center">
            {buttons && buttons.map(btn => (
              <ButtonRenderer key={btn._key} {...btn} />
            ))}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default Card;
