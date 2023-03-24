import BlockContent from '@sanity/block-content-to-react';
import React from 'react';

const BlockContentRenderer = ({ blockContent }) => {
  const serializers = {
    types: {
      block: props => {
        const style = props.node.style || 'normal';

        // Check if the block is empty
        if (props.children.length === 1 && props.children[0] === '') {
          return <br />;
        }

        switch (style) {
          case 'h1':
            return <h1 className="text-8xl">{props.children}</h1>;
          case 'h2':
            return <h2 className="text-6xl">{props.children}</h2>;
          case 'h3':
            return <h3 className="text-4xl">{props.children}</h3>;
          case 'h4':
            return <h4 className="text-2xl">{props.children}</h4>;
          case 'h5':
            return <h5 className="text-xl">{props.children}</h5>;
          case 'h6':
            return <h6 className="text-lg">{props.children}</h6>;
          case 'h1+center':
            return <h1 className="text-center">{props.children}</h1>;
          case 'h2+center':
            return <h2 className="text-center">{props.children}</h2>;
          case 'h3+center':
            return <h3 className="text-center">{props.children}</h3>;
          case 'h4+center':
            return <h4 className="text-center">{props.children}</h4>;
          case 'h5+center':
            return <h5 className="text-center">{props.children}</h5>;
          case 'h6+center':
            return <h6 className="text-center">{props.children}</h6>;
          default:
            return <p>{props.children}</p>;
        }
      },
    },
  };

  return <BlockContent blocks={blockContent} serializers={serializers} />;
};

export default BlockContentRenderer;