import { IHeadingAndTitle } from '_lib/types';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { title, heading } = props;
  return (
    <div key={props._key} className="mx-auto my-12 px-4 text-center">
      <h2 className="text-2xl font-bold xs:text-4xl">{title}</h2>
      <h2 className="mt-4 text-xl font-light tracking-widest">{heading}</h2>
    </div>
  );
};

export default HeadingAndTitle;
