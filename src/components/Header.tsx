import { ISlug } from '_lib/types';
import { Navbar } from 'flowbite-react';
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

const Header = (props: IMenuProps) => {
  const { items } = props;

  return (
    <>
      <nav key={props.key} className="rounded max-xs:hidden">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center">
            <img
              alt="ProEnabler"
              className="mx-10 -mt-6 h-12"
              src="https://amban.fi/wp-content/uploads/2023/01/Enabler-logo-ei-taustaa-e1676467699355.webp"
            />
            <p className="-ml-6  -mt-6 text-xl font-bold">ProEnabler</p>
          </Link>
          <div className="hidden w-auto xs:block" id="navbar-default">
            <ul className="my-2 mx-10 flex p-4 text-sm font-medium md:space-x-4 ">
              {items.map(item => {
                return (
                  <li key={item.slug.current}>
                    <Link
                      href={'/' + item.slug.current}
                      className="block py-2 px-4 pb-6 text-gray-300 hover:text-white"
                      aria-current="page">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <Navbar className="hidden max-xs:block">
        <div className="flex justify-between">
          <Navbar.Brand href="/" className="flex shrink flex-wrap">
            <img
              alt="ProEnabler"
              className="h-16"
              src="https://amban.fi/wp-content/uploads/2023/01/Enabler-logo-ei-taustaa-e1676467699355.webp"
            />
            <p className="ml-4 text-lg font-bold">ProEnabler</p>
          </Navbar.Brand>
        </div>
        <div className="">
          <span className="sr-only">Open main menu</span>
          <Navbar.Toggle
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="mr-4"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          />
        </div>
        <Navbar.Collapse>
          <div className="ml-12 flex flex-col">
            {items.map(item => {
              return (
                <Navbar.Link key={item.slug.current} href={'/' + item.slug.current} className="">
                  {item.name}
                </Navbar.Link>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
