import { useEffect, useState } from 'react';

import { navigation } from '../../constants';

import { ContactInfo, DesktopNav, Logo, MobileNav } from './components';

export const Header = () => {
  const [hideTopBlock, setHideTopBlock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBlock(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-dark shadow-sm">
      {/* Top Block (Logo + Contact Info) */}
      <div
        className={`overflow-hidden transition-all duration-500 sm:block ${
          hideTopBlock ? 'max-h-0 opacity-0' : 'max-h-[300px] opacity-100'
        }`}
      >
        <div className="container flex flex-col justify-between gap-6 py-6 lg:mx-auto lg:flex-row lg:items-center">
          <Logo />
          <ContactInfo />
        </div>
      </div>

      {/* Navigation */}
      <div className="shadow-top-sm bg-dark-300">
        <div className="container">
          <DesktopNav items={navigation} />
          <MobileNav items={navigation} />
        </div>
      </div>
    </header>
  );
};

export default Header;
