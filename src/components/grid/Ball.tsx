// Card.tsx
import { IBall, IColor } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';

const Ball = (props: IBall) => {
  const { blockContent, opacity } = props;
  const overlayOpacity = opacity ? opacity / 100 : 1;

  return (
    <div key={props._key} className="p-4">
      <div
        className="aspect-square rounded-full border-2 border-highlight bg-bg p-6 shadow-2xl">
        <div className="flex justify-center text-text">
          <BlockContentRenderer blockContent={blockContent} />
        </div>
      </div>
    </div>
  );
};

export default Ball;
