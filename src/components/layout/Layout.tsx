import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer, Header, ScrollToTopButton, SocialMediaButton } from './';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <div className="relative z-50 flex min-h-screen flex-col">
      <Header />
      <main className="sm:mb:20 mt-[248px] flex-1 pb-12 sm:pb-16 lg:mt-[152px] lg:pb-20 xl:mt-[156px]">
        <Outlet />
      </main>
      <div className="fixed bottom-2 right-4 z-50 flex flex-col justify-center gap-2 sm:bottom-2">
        <SocialMediaButton />
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
