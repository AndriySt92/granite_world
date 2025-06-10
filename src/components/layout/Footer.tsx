import { CgMail, CgPhone } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

import {
  contactInfo,
  navigation,
  productsCategoriesList,
  socialMediaPlatforms,
} from '../../constants';
import { SocialMediaIcon, Text, Title } from '../common';

import { FooterContactItem } from './components';

const Footer = () => {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/6KgLJifNohaMp5ad7', '_blank');
  };

  return (
    <footer className="bg-dark">
      <div className="container w-full py-10 text-white">
        <div className="grid gap-1 gap-y-5 font-main tracking-wider max-lg:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-10">
          {/* First Block */}
          <section className="lg:col-span-1">
            <Title as="h4" variant="lightWithAccent" uppercase size="xs" className="!text-left">
              Навігація
            </Title>
            <nav className="mt-3 flex flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="font-semibold text-white transition-colors duration-300 hover:text-primary"
                >
                  <Text as="span" hover="primary" variant="light" size="sm" weight="semibold">
                    {item.label}
                  </Text>
                </NavLink>
              ))}
            </nav>
          </section>

          {/* Third Block */}
          <section className="lg:order-last lg:col-span-1">
            <Title as="h4" variant="lightWithAccent" uppercase size="xs" className="!text-left">
              Контакти
            </Title>
            <div className="mt-3 space-y-3">
              <div
                className="group flex cursor-pointer gap-1 transition-colors duration-300 hover:text-primary sm:gap-3"
                onClick={handleMapClick}
                role="button"
                tabIndex={0}
              >
                <FaLocationDot className="mt-1 h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6" />
                <div className="flex flex-col ">
                  <Text as="span" variant="light" size="sm" weight="semibold" hover="group">
                    Івано-Франківська обл.,
                  </Text>
                  <Text as="span" variant="light" size="sm" weight="semibold" hover="group">
                    м. Городенка,
                  </Text>
                  <Text as="span" variant="light" size="sm" weight="semibold" hover="group">
                    вул. Шевченка 81
                  </Text>
                </div>
              </div>
              <div className="flex gap-1 font-semibold text-white transition-colors duration-300 hover:text-primary sm:gap-3">
                <CgPhone className="mt-1 h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6" />
                <div className="flex flex-col">
                  <FooterContactItem href={`tel:${contactInfo.phones[0]}`}>
                    <Text as="span" hover="primary" variant="light" size="sm" weight="semibold">
                      {contactInfo.phones[0]}
                    </Text>
                  </FooterContactItem>
                  <FooterContactItem href={`tel:${contactInfo.phones[1]}`}>
                    <Text as="span" hover="primary" variant="light" size="sm" weight="semibold">
                      {contactInfo.phones[1]}
                    </Text>
                  </FooterContactItem>
                </div>
              </div>
              <FooterContactItem icon={CgMail} href={`mailto:${contactInfo.email}`}>
                <Text as="span" hover="primary" variant="light" size="sm" weight="semibold">
                  {contactInfo.email}
                </Text>
              </FooterContactItem>
              <div className="flex gap-4">
                {socialMediaPlatforms.map(({ name, icon: Icon, link, color }) => (
                  <SocialMediaIcon
                    key={name}
                    name={name}
                    link={link}
                    color={color}
                    Icon={Icon}
                    size={26}
                    className="!h-10 !w-10"
                  />
                ))}
              </div>
            </div>
          </section>
          {/* Second Block */}
          <section className="max-lg:col-span-2 max-lg:row-start-2 lg:col-span-2">
            <div className="mx-auto max-w-md">
              <Title as="h4" variant="lightWithAccent" uppercase size="xs" className="text-left">
                Основна продукція
              </Title>
              <nav className="mt-3 grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  {productsCategoriesList
                    .slice(0, Math.ceil(productsCategoriesList.length / 2))
                    .map((item) => (
                      <NavLink key={item.label} to={item.path}>
                        <Text as="span" hover="primary" variant="light" size="sm" weight="semibold">
                          {item.label}
                        </Text>
                      </NavLink>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                  {productsCategoriesList
                    .slice(Math.floor(productsCategoriesList.length / 2))
                    .map((item) => (
                      <NavLink key={item.label} to={item.path}>
                        <Text as="span" hover="primary" variant="light" size="sm" weight="semibold">
                          {item.label}
                        </Text>
                      </NavLink>
                    ))}
                </div>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
