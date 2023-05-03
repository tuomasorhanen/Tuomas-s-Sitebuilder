import { IHeadingAndTitle } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import React from 'react';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { blockContent} = props;

  return (
    <div key={props._key} className="py-16 ">
      <div className="mx-auto max-w-screen-md px-4 text-center">
      <BlockContentRenderer blockContent={blockContent && blockContent} />
      </div>
    </div>
  );
};

export default HeadingAndTitle;
