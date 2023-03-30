// Card.tsx
import { IBall, IColor } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';

const Ball = (props: IBall) => {
  const { blockContent, opacity } = props;
  const overlayOpacity = opacity ? opacity / 100 : 1;

  return (
    <div key={props._key} className="mx-auto max-w-xs p-4">
      <div
        className="aspect-square rounded-full bg-gradient-to-br from-highlight to-power shadow-2xl text-center"
        style={{ opacity: overlayOpacity }}>
        <div className="flex items-center justify-center h-full text-bg">
          <BlockContentRenderer blockContent={blockContent} />
        </div>
      </div>
    </div>
  );
};




export default Ball;
