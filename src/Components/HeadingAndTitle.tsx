import { IHeadingAndTitle } from '_lib/types';

type IHeadingAndTitleProps = IHeadingAndTitle & {
  key: string;
};

const HeadingAndTitle = (props: IHeadingAndTitleProps) => {
  const { title, heading } = props;
  return (
    <div key={props.key} className="bg-gray-900 lg:relative lg:z-10 lg:pb-0">
      <div className=" py-12 text-center text-white md:py-20 lg:mx-auto lg:max-w-7xl ">
        <h2 className="pb-2 text-4xl font-medium">{title}</h2>
        <h2 className="px-6 text-xl font-light tracking-widest md:px-20 lg:px-64 xl:px-80">{heading}</h2>
      </div>
    </div>
  );
};

export default HeadingAndTitle;
