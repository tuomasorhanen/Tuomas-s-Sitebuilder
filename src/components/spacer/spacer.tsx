import { ISpacer } from '_lib/types';
import React from 'react';

interface SpacerProps extends ISpacer {}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  const { size, bgColor } = props;
  const bgColorStyle = bgColor ? { backgroundColor: bgColor.hex } : {};

  return <div className={`py-${size} bg-bg`}></div>;
};

export default Spacer;
