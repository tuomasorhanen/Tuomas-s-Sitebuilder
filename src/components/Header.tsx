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
              className="mx-10 h-12"
              src="https://static.wixstatic.com/media/57a978_52041878612c44809440b9c8cbd400de~mv2.webp"
            />
          </Link>
          <div className="hidden w-auto xs:block" id="navbar-default">
            <ul className="my-2 mx-10 flex space-x-4 p-4 text-sm font-medium">
              {items.map(item => {
                return (
                  <li key={item.slug.current}>
                    <Link
                      href={'/' + item.slug.current}
                      className="block py-2 px-4 text-gray-300 hover:text-white"
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
          <Navbar.Brand href="/">
            <img
              alt="ProEnabler"
              className="mx-10 h-12"
              src="https://static.wixstatic.com/media/57a978_52041878612c44809440b9c8cbd400de~mv2.webp"
            />
          </Navbar.Brand>
        </div>
        <div className="flex flex-wrap">
          <span className="sr-only">Open main menu</span>
          <Navbar.Toggle
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="mx-10"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          />
        </div>
        <Navbar.Collapse>
          <div className="flex flex-col ">
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
