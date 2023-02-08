import { IButton } from '_lib/types';

const CustomButton = (props: IButton) => {
  const { buttonText, buttonUrl } = props;
  return (
    <div className="flex justify-center bg-gray-900 pb-12">
      <a
        href={buttonUrl}
        className="rounded-md border-2 border-gray-400 bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-xl hover:scale-110"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CustomButton;
