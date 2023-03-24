import { IHeadingAndTitle } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import React from 'react';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { blockContent} = props;

  return (
    <div key={props._key} className="bg-bg">
      <div className="mx-auto max-w-screen-sm px-4 text-center">
        <div className='text-text'>
          <BlockContentRenderer blockContent={blockContent} />
        </div>
      </div>
    </div>
  );
};

export default HeadingAndTitle;
