import { ISlug } from '_lib/types';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const navigation = [
  { name: 'Palvelut', href: '/services' },
  { name: 'Asiakkaat', href: '/testimonials' },
  { name: 'Minusta', href: '/about' },
  { name: 'Blogi', href: '/blog' },
  { name: 'Yhteystiedot', href: '/contacts' },
];

export type IMenuItem = {
  name: string;
  slug: ISlug;
  menuOrder: number;
};

type IMenuProps = {
  items: IMenuItem[];
};

const Header = (props: IMenuProps) => {
  const { items } = props;

  return (
    <>
      <nav className="rounded border-gray-200 bg-gray-900 px-2 py-2.5 max-xs:hidden sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              alt="ProEnabler"
              className="mr-3 h-6 sm:h-9"
              src="https://static.wixstatic.com/media/57a978_52041878612c44809440b9c8cbd400de~mv2.webp"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">ProEnabler</span>
          </Link>

          <div className="hidden w-auto xs:block" id="navbar-default">
            <ul className="mt-4 flex flex-row space-x-8 rounded-lg  border-0  border-gray-700 bg-gray-900 p-4 text-sm font-medium">
              {items.map(item => {
                return (
                  <li key={item.slug.current}>
                    <Link
                      href={'/' + item.slug.current}
                      className="block rounded border-0 p-0 py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-900 hover:bg-transparent  hover:text-white"
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
      <Navbar
        className="hidden border-gray-200 bg-gray-900 px-2 py-2.5 max-xs:block sm:px-4"
        fluid={true}
        rounded={true}>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Navbar.Brand href="/">
            <img
              alt="ProEnabler"
              className="mr-3 h-6 sm:h-9"
              src="https://static.wixstatic.com/media/57a978_52041878612c44809440b9c8cbd400de~mv2.webp"
            />{' '}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ProEnabler</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {items.map(item => {
              return (
                <Navbar.Link key={item.slug.current} href={'/' + item.slug.current}>
                  {item.name}
                </Navbar.Link>
              );
            })}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
