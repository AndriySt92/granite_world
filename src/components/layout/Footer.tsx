import { CgMail, CgPhone } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { navigation, products } from '../../constants';

const Footer = () => {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/6KgLJifNohaMp5ad7', '_blank');
  };

  return (
    <footer className="bg-dark">
      <div className="container w-full py-10 text-white">
        <div className="grid gap-1 gap-y-5 font-main tracking-wider max-lg:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-10">
          {/* First Block */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-extrabold uppercase first-letter:text-primary">
              Навігація
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="font-semibold text-white transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Third Block */}
          <div className="lg:order-last lg:col-span-1">
            <h4 className="text-xl font-extrabold uppercase first-letter:text-primary">Контакти</h4>
            <div className="mt-3 space-y-3">
              <div
                className="flex cursor-pointer gap-1 font-semibold text-white transition-opacity hover:text-primary sm:gap-3"
                onClick={handleMapClick}
                role="button"
                tabIndex={0}
              >
                <FaLocationDot className="mt-1 h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6" />
                <div className="flex flex-col">
                  <span>Івано-Франківська обл.,</span>
                  <span>м. Городенка,</span>
                  <span>вул. Шевченка 81</span>
                </div>
              </div>

              <div className="flex gap-1 font-semibold text-white sm:gap-3">
                <CgPhone className="mt-1 h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6" />
                <div className="flex flex-col">
                  <a
                    href="tel:+380961121126"
                    className="transition-colors duration-300 hover:text-primary"
                    rel="noopener noreferrer"
                  >
                    +38 096 112 112 6
                  </a>
                  <a
                    href="tel:+380671121126"
                    className="transition-colors duration-300 hover:text-primary"
                    rel="noopener noreferrer"
                  >
                    +38 067 112 112 6
                  </a>
                </div>
              </div>

              <a
                href="mailto:graniteworld@gmail.com"
                className="flex gap-1 font-semibold text-white transition-colors duration-300 hover:text-primary sm:gap-3"
                rel="noopener noreferrer"
              >
                <CgMail className="mt-1 h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6" />
                <span>granite@gmail.com</span>
              </a>
            </div>
          </div>
          {/* Second Block */}
          <div className="max-lg:col-span-2 max-lg:row-start-2 lg:col-span-2">
            <div className="xl:px-20">
              <h4 className="text-xl font-extrabold uppercase first-letter:text-primary lg:text-center">
                Основна продукція
              </h4>
              <nav className="mt-3 grid grid-cols-2 gap-2">
                {products.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="font-semibold text-white transition-colors duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
