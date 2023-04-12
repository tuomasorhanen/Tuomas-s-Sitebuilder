import { IBall} from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';

const Ball = (props: IBall) => {
  const { blockContent, opacity } = props;
  const overlayOpacity = opacity ? opacity / 100 : 1;

  return (
    <div key={props._key} className="mx-auto max-w-screen-lg">
      <div
        className="aspect-square rounded-full customgradient shadow-lg text-center"
        style={{ opacity: overlayOpacity }}>
        <div className="flex items-center justify-center h-full text-bg">
        <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      </div>
    </div>
  );
};

export default Ball;