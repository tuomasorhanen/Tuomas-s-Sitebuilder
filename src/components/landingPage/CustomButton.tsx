import React from 'react';
import { ICustomButton } from '_lib/types';
import ButtonRenderer from 'components/ButtonRenderer';

const CustomButton = (props: ICustomButton) => {
  const { buttons } = props;

  return (
    <div key={props._key} className="flex h-full items-center justify-center">
      {buttons.map(btn => (
        <ButtonRenderer key={btn.navigateToPage || btn.navigateToUrl} btn={btn} />
      ))}
    </div>
  );
};

export default CustomButton;
