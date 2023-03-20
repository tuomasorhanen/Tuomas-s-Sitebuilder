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
      <nav key={props.key} className="rounded max-xs:hidden ">
        <div className="flex justify-between py-2">
          <Link href="/" className="flex items-center z-20">
            <img
              alt="Tuomas's Site"
              className="mx-10 h-12 rounded-full"
              src="https://amban.fi/wp-content/uploads/2022/06/Tuomas-Orhanen-Amban.jpeg"
            />
            <p className="-ml-6 text-xl text-gray-100 hover:text-white font-bold">Tuomas's Site</p>
          </Link>
          <div className="hidden w-auto xs:block z-20" id="navbar-default">
            <ul className="my-2 mx-10 flex text-sm font-medium md:space-x-4">
              {items.map(item => {
                return (
                  <li key={item.slug.current}>
                    <Link
                      href={'/' + item.slug.current}
                      className="block py-2 px-4 lg:text-xl text-gray-100 hover:text-white"
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
        <div className="flex justify-between py-2 ">
          <Navbar.Brand href="/" className="flex shrink flex-wrap">
            <img
              alt="Tuomas's Site"
              className="h-12 rounded-full"
              src="https://amban.fi/wp-content/uploads/2022/06/Tuomas-Orhanen-Amban.jpeg"
            />
            <p className="ml-4 text-lg text-white font-bold">Tuomas's Site</p>
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
