import { ICalendly } from '_lib/types';
import BlockContentRenderer from 'components/BlockContentRenderer';
import ButtonRenderer from 'components/ButtonRenderer';
import Calendly from 'components/Calendly';

const CalendlySection = (props: ICalendly) => {
  const { blockContent, buttons, layout, calendlyLink } = props;

  switch (layout) {
    case 'calendly-right':
      return (
        <div key={props._key} className="flex flex-col md:flex-row md:space-x-6 py-16 max-w-7xl mx-auto">
          <div className="md:w-1/2 px-8 text-center mx-auto md:text-left md:p-8">
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <ul role="list" className="space-y-2 flex justify-center md:justify-start mt-4 md:space-y-0 md:flex md:space-x-2">
              {buttons &&
                buttons.map((btn) => (
                  <ButtonRenderer key={btn._key} {...btn} />
                ))}
            </ul>
          </div>
          <div className="md:w-1/2 p-8 shadow-lg">
            <div>
              <Calendly {...props} />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default CalendlySection;
