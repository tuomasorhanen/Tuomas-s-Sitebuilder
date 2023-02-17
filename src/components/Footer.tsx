import { ISlug } from '_lib/types';
import Link from 'next/link';

export type IMenuItem = {
  name: string;
  slug: ISlug;
  menuOrder: number;
};

type IMenuProps = {
  items: IMenuItem[];
  key?: string;
};

const MyFooter = (props: IMenuProps) => {
  const { items } = props;
  return (
    <div key={props.key} className="mx-auto max-w-7xl overflow-hidden py-16 px-6 ">
      <nav className=" flex flex-wrap justify-center space-x-4 sm:space-x-12">
        {items.map(item => {
          return (
            <div key={item.slug.current}>
              <Link href={'/' + item.slug.current} className="text-gray-300 hover:text-white">
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
      <p className="mt-4 text-center text-xs leading-5 text-gray-500">
        &copy; 2023 ProEnabler, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default MyFooter;
