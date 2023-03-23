import { IHeadingAndTitle } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import React from 'react';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { blockContent, bgColor, textColor, _key, _type } = props;

  const bgColorStyle = bgColor ? { backgroundColor: bgColor.hex } : {};
  const textStyle = textColor ? { color: textColor.hex } : {};

  return (
    <div key={props._key} className="" style={bgColorStyle}>
      <div className="mx-auto max-w-screen-sm px-4 text-center">
        <div style={textStyle}>
          <BlockContentRenderer blockContent={blockContent} />
        </div>
      </div>
    </div>
  );
};

export default HeadingAndTitle;
