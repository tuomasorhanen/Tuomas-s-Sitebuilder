import React from 'react';
import Link from 'next/link';
import { ICustomButton } from '_lib/types';

const CustomButton = (props: ICustomButton) => {
  const { buttons } = props
  return (
    <div className="flex justify-center">
      {buttons &&
        buttons.map(btn => {
          return (
            <Link
              key={btn.navigateToPage}
              href={btn.navigateToPage ? btn.navigateToPage : '/home'}
              className="button">
              {btn.callToAction}
            </Link>
          );
        })}
    </div>
  );
};

export default CustomButton;
