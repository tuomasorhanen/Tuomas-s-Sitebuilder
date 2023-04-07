import React from 'react';
import Link from 'next/link';
import { ICustomButton } from '_lib/types';
import Image from 'components/Image';

const CustomButton = (props: ICustomButton) => {
  const { buttons } = props;

  return (
    <div key={props._key} className="flex justify-center h-full items-center">
      {buttons &&
        buttons.map(btn => {
          if (btn.linkType === 'internal') {
            return (
              <Link key={btn._id} href={btn.navigateToPage ? btn.navigateToPage : '/home'}>
                {btn.image ? (
                  <Image {...btn.image} alt="" className="h-12 w-12 object-cover" />
                ) : (
                  <span className="button">{btn.callToAction}</span>
                  )}
              </Link>
            );
          } else if (btn.linkType === 'external') {
            return (
              <a key={btn._id} href={btn.navigateToUrl}>
                {btn.image ? (
                  <Image {...btn.image} alt="" className="h-16 w-16 object-cover" />
                ) : (
                  <span className="button">{btn.callToAction}</span>
                  )}
              </a>
            );
          }
          return null;
        })}
    </div>
  );
};

export default CustomButton;
