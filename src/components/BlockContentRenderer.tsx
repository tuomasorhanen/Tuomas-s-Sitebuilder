import BlockContent from '@sanity/block-content-to-react';
import React from 'react';

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
            return <h1 className="text-6xl sm:text-8xl pb-2">{props.children}</h1>;
          case 'h2':
            return <h2 className="text-6xl pb-2">{props.children}</h2>;
          case 'h3':
            return <h3 className="text-4xl pb-2">{props.children}</h3>;
          case 'h4':
            return <h4 className="text-2xl pb-2">{props.children}</h4>;
          case 'h5':
            return <h5 className="text-xl pb-2">{props.children}</h5>;
          case 'h6':
            return <h6 className="text-lg pb-2">{props.children}</h6>;
          default:
            return <p className='text-xl pb-2'>{props.children}</p>;
        }
      },
    },
  };

  return <BlockContent blocks={blockContent} serializers={serializers} />;
};

export default BlockContentRenderer;
