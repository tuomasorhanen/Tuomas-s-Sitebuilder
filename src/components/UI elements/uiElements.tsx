import { IUiElement } from '_lib/types';
import React from 'react';
import Image from 'components/Image';
import { useTheme } from 'next-themes';

const UiElement = (props: IUiElement) => {
  const { style, image, opacity } = props;

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  switch (style) {
    case 'wave':
      return (
        <div className="">
          <svg viewBox="0 0 1240 175">
            <path
              fill={isDark ? 'var(--primary-color-dark' : 'var(--primary-color-light)'}
              d="M0,32L60,58.7C120,85,240,139,360,144C480,149,600,107,720,106.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      );
    case 'solid-left':
      return (
        <div className="-z-10 h-0">
          <div className=" my-16 h-80 w-full bg-bg-dark dark:bg-bg-light sm:my-24"></div>
        </div>
      );
    case 'transparent-overlap':
      return (
        <div className="relative">
          <div className="absolute bottom-0 left-0 z-40 w-full bg-transparent">
            <svg viewBox="0 0 1440 317">
              <path
                fillOpacity="0.2"
                d="M0,224L360,288L720,192L1080,288L1440,128L1440,320L1080,320L720,320L360,320L0,320Z"></path>
              <svg viewBox="0 0 1440 190" className="absolute left-0 top-0">
                <path
                  fill={isDark ? 'var(--bg-color-dark' : 'var(--bg-color-light)'}
                  fillOpacity="1"
                  d="M0,256L360,224L720,128L1080,192L1440,192L1440,320L1080,320L720,320L360,320L0,320Z"></path>
              </svg>
            </svg>
          </div>
        </div>
      );
    case 'image-divider':
      return (
        <div className="-z-10 h-0">
          <div className=" my-16 h-80 w-full dark:bg-bg-dark bg-bg-light sm:my-24">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default UiElement;
