import { IHeadingAndTitle } from '_lib/types';

type IHeadingAndTitleProps = IHeadingAndTitle & {
  key: string;
};

const HeadingAndTitle = (props: IHeadingAndTitleProps) => {
  const { title, heading } = props;
  return (
    <div key={props.key} className="mx-auto my-12 max-w-5xl text-center">
      <h2 className="text-4xl">{title}</h2>
      <h2 className="mt-4 text-xl font-light tracking-widest">{heading}</h2>
    </div>
  );
};

export default HeadingAndTitle;