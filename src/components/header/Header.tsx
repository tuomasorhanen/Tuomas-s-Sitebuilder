import { useState, useEffect } from 'react';
import { ISiteSettings, ISlug } from '_lib/types';
import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import Image from 'components/Image';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export type IMenuItem = {
  name: string;
  slug: ISlug;
  menuOrder: number;
};

type IMenuProps = {
  items: IMenuItem[];
  key?: string;
};

const Header = (props: IMenuProps & { settings: ISiteSettings }) => {
  const { items, settings } = props;
  
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const [navBackground, setNavBackground] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavBackground(isDark ? 'bg-bg-dark' : 'bg-bg-light');
      } else {
        setNavBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call the function manually to apply the correct background color immediately.

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDark]);

  return (
    <>
<nav
  key={props.key}
  className={`hidden sm:block fixed top-0 w-full z-40 ${navBackground} transition ease-in-out delay-150 duration-500`}
>

        <div className="flex justify-between py-2">
          <Link href="/" className="z-40 flex items-center">
            <Image
              {...settings.logo}
              alt={settings.title}
              className="mx-10 rounded-full shadow-lg max-h-20 w-20"
            />
          </Link>
          <div className="z-40 hidden sm:block" id="navbar-default">
            <ul className="my-2 mx-10 flex text-2xl font-bold sm:space-x-4">
              {items.map((item) => {
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
        className="p-2 rounded-full focus:outline-none focus:borderstyle"
        aria-label="Toggle dark mode"
      >
        {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
            </ul>
          </div>
        </div>
      </nav>
      <Navbar className="sm:hidden bg-bg-light dark:bg-bg-dark">
        <div className="flex justify-between py-2 ">
          <Navbar.Brand href="/" className="flex shrink flex-wrap">
          <Image
            {...settings.logo}
              alt={settings.title}
              className="mx-10 rounded-full shadow-lg h-16 w-16"
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
  {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
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
