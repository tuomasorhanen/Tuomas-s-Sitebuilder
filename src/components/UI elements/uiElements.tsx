import { IUiElement } from '_lib/types';
import React from 'react';

const UiElement = (props: IUiElement) => {
  const { style,} = props;


  switch (style) {
    case 'wave':
      return (
        <div className="bg-bg">
          <svg viewBox="0 0 1240 175">
            <path 
              d="M0,32L60,58.7C120,85,240,139,360,144C480,149,600,107,720,106.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      );
    default:
      return <></>;
  }
};

export default UiElement;
