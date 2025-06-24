import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Home', 'About Us', 'Services', 'Destinations'];

function TopHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const getHref = (item) => {
    switch (item) {
      case 'Home':
        return '/';
      case 'About Us':
        return '/about';
      case 'Services':
        return '/services';
      case 'Destinations':
        return '/explorer';
      default:
        return '#';
    }
  };

  const isActive = (item) => location.pathname === getHref(item);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Mobile Menu Button & Desktop Logo */}
        <div className="flex items-center w-1/4 gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            style={{
              transform: isNavOpen ? 'rotate(90deg) scale(1.1)' : 'rotate(0deg) scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Flogo.png?alt=media&token=39aec30d-2fb4-4ff4-ae38-7bc73624278d"
            alt="Aerovio Logo"
            className="hidden md:block h-12 w-auto"
          />
        </div>

        {/* Centered Logo for Mobile & Desktop Nav */}
        <div className="flex flex-1 justify-center items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Flogo.png?alt=media&token=39aec30d-2fb4-4ff4-ae38-7bc73624278d"
            alt="PropTrak Logo"
            className="md:hidden h-10 w-auto"
          />

          <nav aria-label="Primary navigation" className="hidden md:flex">
            <ul className="flex items-center gap-8 lg:gap-12 text-base lg:text-lg font-medium text-white whitespace-nowrap">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    to={getHref(item)}
                    className={`relative px-1 py-2 transition-colors duration-300 ${
                      isActive(item)
                        ? 'text-purple-400'
                        : 'text-white hover:text-purple-400'
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive(item) ? 'w-full bg-purple-600' : 'w-0 bg-purple-600 hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Side: Contact Button */}
        <div className="w-1/4 flex justify-end items-center">
          <Link
            to="/contact"
            className={`text-sm lg:text-lg font-semibold transition-colors duration-300 ${
              location.pathname === '/contact'
                ? 'text-purple-400'
                : 'text-white hover:text-purple-400'
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <nav className="md:hidden bg-zinc-900 text-white border-t border-zinc-800 shadow-inner">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-base font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <Link
                  to={getHref(item)}
                  className={`block rounded-lg px-3 py-2 transition-colors duration-300 ${
                    isActive(item) ? 'bg-purple-700 text-white' : 'hover:bg-purple-700'
                  }`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className={`block rounded-lg px-3 py-2 transition-colors duration-300 font-semibold ${
                  location.pathname === '/contact' ? 'bg-purple-700' : 'hover:bg-purple-700'
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default TopHeader;
