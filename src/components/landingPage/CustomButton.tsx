import React from 'react';
import Link from 'next/link';
import { ICustomButton } from '_lib/types';

const CustomButton = (props: ICustomButton) => {
  const { buttons } = props
  return (
    <div className="flex justify-center bg-bg">
      {buttons &&
        buttons.map(btn => {
          return (
            <Link
              key={btn.navigateToPage}
              href={btn.navigateToPage ? btn.navigateToPage : '/home'}
              className="mx-2 rounded-full border-2 border-highlight border-b-power border-r-power py-2 px-4 text-xl font-bold text-text shadow-xl hover:scale-105">
              {btn.callToAction}
            </Link>
          );
        })}
    </div>
  );
};

export default CustomButton;
