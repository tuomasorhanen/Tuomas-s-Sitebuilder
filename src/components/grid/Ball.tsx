// Card.tsx
import { IBall, IColor } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';

interface BallProps extends IBall {
  defaultColors: {
    defaultBgColor: IColor;
    defaultTextColor: IColor;
    defaultHighlightColor: IColor;
  };
}

const Ball = (props: BallProps) => {
  const { blockContent, bgColor, highlightColor, textColor, opacity } = props;

  const overlayOpacity = opacity ? opacity / 100 : 1;
  const bgColorStyle = bgColor
    ? { backgroundColor: `${bgColor.hex}`, opacity: overlayOpacity }
    : { backgroundColor: props.defaultColors.defaultBgColor.hex, opacity: overlayOpacity };
  const textColorStyle = textColor ? { color: textColor.hex } : { color: props.defaultColors.defaultTextColor.hex };
  const highlightColorStyle = highlightColor
    ? { borderColor: highlightColor.hex }
    : { borderColor: props.defaultColors.defaultHighlightColor.hex };

      return (
        <div key={props._key} className="p-4">
        <div className="rounded-full aspect-square border-2 p-6 shadow-2xl" style={{ ...highlightColorStyle, ...bgColorStyle }}>
          <div className="flex justify-center">
          <BlockContentRenderer blockContent={blockContent} />
          </div>
        </div>
        </div>
      );
  };

export default Ball;
