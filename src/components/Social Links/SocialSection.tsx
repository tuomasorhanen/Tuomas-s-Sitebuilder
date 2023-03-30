import { ISocialSection } from '_lib/types';
import React from 'react';
import Image from 'components/Image';
import Link from 'next/link';

const SocialSection = (props: ISocialSection) => {
  const { _key, _type, buttons } = props;

  return (
    <div className="flex justify-center bg-bg">
      {buttons &&
        buttons.map(item => {
          return (
            <div className='px-4 xs:px-12 md:px-28'>
            <Link key={item._id} href={item.navigateToUrl}>
                <Image className="h-20 w-20" {...item.image} alt={item.externalLinkName} />
            </Link>
            </div>
          );
        })}
    </div>
  );
};


export default SocialSection;
