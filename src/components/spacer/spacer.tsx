import React from 'react';
import { ISpacer } from '_lib/types';

interface SpacerProps extends ISpacer {}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  const { size, bgColor } = props;
  const bgColorStyle = bgColor ? { backgroundColor: bgColor.hex } : {};

  return <div className={`py-${size}`} style={bgColorStyle}></div>;

};

export default Spacer;
