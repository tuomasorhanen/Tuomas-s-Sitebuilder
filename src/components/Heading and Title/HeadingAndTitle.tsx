import { IHeadingAndTitle } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import React from 'react';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { blockContent, style} = props;

  switch (style) {
    case 'centered':
      return (
        <div key={props._key} className="py-16 ">
        <div className="mx-auto max-w-screen-md px-4 text-center">
        <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      </div>
      );
    case 'overlap-bellow':
      return (
        <div key={props._key} className="h-0 py-28 ">
          <div className='h-48 bg-bg-dark dark:bg-bg-light py-8 shadow-lg border-2 border-l-0 border-gray-500'>
        <div className="mx-auto max-w-screen-md px-4 text-center z-10 text-text-dark dark:text-text-light">
        <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
        </div>
      </div>
      );
    default:
      return <></>;
  }
};

export default HeadingAndTitle;
