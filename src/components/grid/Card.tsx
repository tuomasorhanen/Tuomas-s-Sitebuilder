// Card.tsx
import { ICard, IColor } from '_lib/types';
import Image from 'components/Image';
import BlockContentRenderer from 'components/BlockContentRenderer';

interface CardProps extends ICard {
  defaultColors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
}

const Card = (props: CardProps) => {
  const { blockContent, image, layout, bgColor, highlightColor, textColor, opacity } = props;

  const overlayOpacity = opacity ? opacity / 100 : 1;
  const bgColorStyle = bgColor
    ? { backgroundColor: `${bgColor.hex}`, opacity: overlayOpacity }
    : { backgroundColor: props.defaultColors.defaultBgColor.hex, opacity: overlayOpacity };
  const textColorStyle = textColor ? { color: textColor.hex } : { color: props.defaultColors.defaultTextColor.hex };
  const highlightColorStyle = highlightColor
    ? { borderColor: highlightColor.hex }
    : { borderColor: props.defaultColors.defaultHighlightColor.hex };

  switch (layout) {
    case 'simple':
      return (
        <div key={props._key} className="rounded-lg border-2 p-6 shadow-2xl" style={{ ...highlightColorStyle, ...bgColorStyle }}>
          <div className="mt-4">
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
          <div className="rounded-lg border shadow-md " style={{ ...highlightColorStyle, ...bgColorStyle }}>
            <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
            <div className="py-4 px-6" style={{...textColorStyle}}>
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
