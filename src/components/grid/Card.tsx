// Card.tsx
import { ICard } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import ButtonRenderer from 'components/ButtonRenderer';
import Image from 'components/Image';
import { useState } from 'react';

const Card = (props: ICard) => {
  const { blockContent, image, layout, buttons } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  switch (layout) {
    case 'simple':
      return (
        <div key={props._key} className="borderstyle bg-bg-dark p-6 shadow-2xl dark:bg-bg-light text-text-dark dark:text-text-light rounded-lg">
          <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      );
    case 'image-top':
      return (
        <div key={props._key}>
          {image && (
            <div className="borderstyle bg-bg-light shadow-lg dark:bg-bg-dark">
              <Image {...image} alt="" className="h-48 w-full object-cover" />
              <div className="px-6 pb-8 pt-4">
                <BlockContentRenderer blockContent={blockContent && blockContent} />
              </div>
            </div>
          )}
          <div className="-mt-6 flex justify-center">
            {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
          </div>
        </div>
      );
      case 'image-top-rounded-full':
      return (
        <div key={props._key} className='pb-16'>
      <Image {...image} className="mx-auto h-32 w-32 rounded-full object-cover shadow-xl z-10" alt="" />
      <figure className="-mt-16 rounded-lg shadow-2xl border-2 dark:border-gray-800 hover:scale-110 hover:border-none">
        <div className="mx-auto p-2 pt-20 pb-8 text-center">
        <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      </figure>
          <div className="-mt-8 flex justify-center">
            {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
          </div>
        </div>
      );
      case 'image-reveal':
        return (
              <div className="perspective">
                <div className="card">
                  <div className="card-face card-face-front">
                    {image && (
                      <Image
                        {...image}
                        alt=""
                        className="aspect-square object-cover"
                      />
                    )}
                  </div>
                  <div className="card-face-back aspect-square p-5 shadow-lg flex flex-col items-center justify-center">
                    <BlockContentRenderer blockContent={blockContent && blockContent} />
                    <div className="mt-4">
                      {buttons && buttons.map(btn => <ButtonRenderer key={btn._key} {...btn} />)}
                    </div>
                  </div>
                </div>
              </div>
          );
      

    default:
      return <></>;
  }
};

export default Card;
