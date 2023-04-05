import { useState, useEffect } from 'react';
import { ISlug } from '_lib/types';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

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

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <nav key={props.key} className="hidden sm:block">
        <div className="flex justify-between py-2">
          <Link href="/" className="z-40 flex items-center">
            <Image
              alt="Amban"
              className="mx-10 rounded-full shadow-lg"
              src="https://amban.fi/wp-content/uploads/2017/11/cropped-amban-profilepic-biggerlogo.png"
              width={80}
              height={80}
            />
          </Link>
          <div className="z-40 hidden sm:block" id="navbar-default">
            <ul className="my-2 mx-10 flex text-2xl font-bold sm:space-x-4">
              {items.map(item => {
                return (
                  <li key={item.slug.current}>
                    <Link href={'/' + item.slug.current} className="block py-2 px-4" aria-current="page">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
                          <button
  onClick={toggleDarkMode}
  className="p-2 rounded-full focus:outline-none focus:borderstyle  "
  aria-label="Toggle dark mode"
>
  {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
</button>
            </ul>
          </div>
        </div>
      </nav>
      <Navbar className="hidden max-sm:block">
        <div className="flex justify-between py-2 ">
          <Navbar.Brand href="/" className="flex shrink flex-wrap">
            <Image
              alt="Amban"
              className="rounded-full"
              src="https://amban.fi/wp-content/uploads/2017/11/cropped-amban-profilepic-biggerlogo.png"
              width={60}
              height={60}
            />
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
                  <button
  onClick={toggleDarkMode}
  className="p-2 rounded-full focus:outline-none focus:borderstyle  "
  aria-label="Toggle dark mode"
>
  {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
</button>
        </div>

        <Navbar.Collapse>
          <div className="ml-12 flex flex-col">
            {items.map(item => {
              return (
                <Navbar.Link key={item.slug.current} href={'/' + item.slug.current}>
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
