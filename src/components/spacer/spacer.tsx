import { ISpacer } from '_lib/types';
import React from 'react';


const Spacer = (props: ISpacer) => {
  const { size,} = props;

  const getPaddingClass = () => {
    switch (size) {
      case '4':
        return 'py-4';
      case '8':
        return 'py-8';
      case '16':
        return 'py-16';
      case '24':
        return 'py-24';
      default:
        return 'py-0';
    }
  };

  return <div className={`${getPaddingClass()} bg-bg`}></div>;
};

export default Spacer;
