import { IUiElement } from '_lib/types';
import React from 'react';
import Image from 'components/Image';


const UiElement = (props: IUiElement) => {
  const { style, image} = props;

  switch (style) {
    case 'wave':
      return (
        <div className="">
          <svg viewBox="0 0 1240 175">
            <path  fill="var(--highlight-color)"
              d="M0,32L60,58.7C120,85,240,139,360,144C480,149,600,107,720,106.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      );
      case 'transparent-overlap':
        return (
          <div className="relative">
            <div className="bg-transparent z-40 absolute bottom-0 left-0 w-full">
              <svg viewBox="0 0 1440 317">
                <path fillOpacity="0.2" d="M0,224L360,288L720,192L1080,288L1440,128L1440,320L1080,320L720,320L360,320L0,320Z"></path>
                <svg  viewBox="0 0 1440 190" className="absolute top-0 left-0">
                  <path fill="white" fillOpacity="1" d="M0,256L360,224L720,128L1080,192L1440,192L1440,320L1080,320L720,320L360,320L0,320Z"></path>
                </svg>
              </svg>
            </div>
          </div>
        );
        case 'window':
          return (
            <div className="flex flex-col items-center relative max-h-96 lg:max-h-fit overflow-hidden -z-30">
              <div className="w-full overflow-hidden relative">
                <svg viewBox="0 0 1440 250" preserveAspectRatio="xMidYMin slice" className="absolute top-0 left-0 w-full">
                  <path fill="white" d="M0,64L360,96L720,48L1080,96L1440,112L1440,0L1080,0L720,0L360,0L0,0Z"></path>
                </svg>
                <svg viewBox="0 0 1440 250" preserveAspectRatio="xMidYMin slice" className="w-full">
                  <path fillOpacity="0.2" d="M0,93L360,29L720,125L1080,29L1440,189L1440,0L1080,0L720,0L360,0L0,0Z"></path>
                </svg>
              </div>
              <div className="absolute top-0 left-0 -z-10 w-full">
                {image && (
                  <Image {...image} className="w-full object-cover" alt="" />
                )}
              </div>
              <div className="w-full overflow-hidden relative">
                <svg viewBox="0 0 1440 65" preserveAspectRatio="xMidYMax slice" className="absolute bottom-0 left-0 w-full">
                  <path fill="white" d="M0,24L360,8L720,72L1080,8L1440,40L1440,72L1080,72L720,72L360,72L0,72Z"></path>
                </svg>
                <svg viewBox="0 150 1440 137" preserveAspectRatio="xMidYMax slice" className="w-full">
                  <path fillOpacity="0.2" d="M0,224L360,288L720,192L1080,288L1440,128L1440,317L1080,317L720,317L360,317L0,317Z"></path>
                </svg>
              </div>
            </div>
          );
        
        
        
        
        
      
      
      
      
    default:
      return <></>;
  }
};

export default UiElement;
