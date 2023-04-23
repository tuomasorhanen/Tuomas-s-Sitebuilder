import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import YouTube from 'react-youtube';

const BlockContentRenderer = ({ blockContent }) => {
  const serializers = {
    types: {
      block: props => {
        const style = props.node.style || 'normal';

        if (props.children.length === 1 && props.children[0] === '') {
          return <br />;
        }

        switch (style) {
          case 'h1':
            return <h1 className="text-6xl sm:text-8xl pb-2 font-orbitron">{props.children}</h1>;
          case 'h2':
            return <h2 className="text-5xl sm:text-6xl pb-2 font-orbitron">{props.children}</h2>;
          case 'h3':
            return <h3 className="text-2xl sm:text-4xl pb-2 font-orbitron">{props.children}</h3>;
          case 'h4':
            return <h4 className="text-2xl pb-2 font-orbitron">{props.children}</h4>;
          case 'h5':
            return <h5 className="text-xl pb-2">{props.children}</h5>;
          case 'h6':
            return <h6 className="text-lg pb-2">{props.children}</h6>;
          default:
            return <p className='text-xl pb-2'>{props.children}</p>;
        }
      },
      youtube: ({ node }) => {
        const { url } = node;
        const videoId = new URL(url).searchParams.get("v");
        return <YouTube videoId={videoId} className='flex justify-center aspect-video max-w-screen p-2' />;
      },
    },
  };

  const content = blockContent && blockContent.flatMap(contentItem => contentItem.text || []);
  return <BlockContent blocks={content} serializers={serializers} />;
};

export default BlockContentRenderer;
