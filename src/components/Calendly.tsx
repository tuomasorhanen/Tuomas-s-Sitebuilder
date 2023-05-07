import { ICalendly } from '_lib/types';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = (props: ICalendly) => {
  const { calendlyLink } = props;
  return (
    <div>
      <InlineWidget url={calendlyLink} />
    </div>
  );
};

export default Calendly;
