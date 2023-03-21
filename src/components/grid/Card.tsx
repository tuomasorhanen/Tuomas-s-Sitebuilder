// Card.tsx
import { ICard, IColor } from '_lib/types';
import Image from 'components/Image';

interface CardProps extends ICard {
    defaultColors: {
      defaultBgColor: IColor;
      defaultTextColor: IColor;
      defaultHighlightColor: IColor;
    };
  }
  
  const Card = (props: CardProps) => {
    const { title, description, image, layout, bgColor, highlightColor, textColor, opacity } = props;
  
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
        <div
        className="rounded-lg p-6 shadow-2xl border-2" style={{ ...highlightColorStyle, ...bgColorStyle }}
      >
        <div className="mt-4">
          <h2 className="text-2xl font-bold tracking-tight" style={textColorStyle}>
            {title}
          </h2>
          <p className="mt-2 font-light" style={textColorStyle}>
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 pt-4">
            <Image
              {...image}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      );
    case 'image-top':
      return (
        <div key={props._key} className="p-4 grid flex-col">
        <div className="rounded-lg border shadow-md " style={{ ...highlightColorStyle, ...bgColorStyle }}>
          <Image {...image} alt="" className="h-48 w-full rounded-t-lg object-cover" />
          <div className="py-4 px-6">
              <h2 className="text-2xl font-bold tracking-tight" style={textColorStyle}>{title}</h2>
              <p className="mt-2 font-light" style={textColorStyle}>{description}</p>
          </div>
        </div>
      </div>
      );
    default:
      return (
<></>
      );
  }
};

export default Card;
