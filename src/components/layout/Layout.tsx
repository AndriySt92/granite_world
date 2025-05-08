import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import SocialMediaButton from './SocialMediaButton';

const Layout = () => {
  return (
    <div className="relative z-50 flex min-h-screen flex-col">
      <Header />
      <main className="sm:mb:20 mb-14 mt-[300px] flex-1 lg:mt-44">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <SocialMediaButton />
      <Footer />
    </div>
  );
};

export default Layout;
