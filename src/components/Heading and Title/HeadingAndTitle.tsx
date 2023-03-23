import BlockContentRenderer from 'components/BlockContentRenderer';
import React from 'react';
import { IHeadingAndTitle } from '_lib/types';


const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { blockContent, bgColor, textColor, _key, _type } = props;

  const bgColorStyle = bgColor ? { backgroundColor: bgColor.hex } : {};
  const textStyle = textColor ? { color: textColor.hex } : {};

  return (
    <div
      key={props._key}
      className=""
      style={bgColorStyle}
    >
      <div className='max-w-screen-sm text-center px-4 mx-auto'>
        <div style={textStyle}>
          <BlockContentRenderer blockContent={blockContent} />
        </div>
      </div>
    </div>
  );
};

export default HeadingAndTitle;
