import { CgMail, CgPhone } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { RiCalendarScheduleFill } from 'react-icons/ri';

import { SocialMediaIcon } from '../../components/common';
import { contactInfo, socialMediaPlatforms } from '../../constants';

const Contacts = () => {
  const handleMapClick = () => {
    window.open(contactInfo.mapLink, '_blank');
  };

  return (
    <div className="container pt-12 sm:pt-16 lg:pt-20">
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        <h1 className="text-center font-main text-3xl font-extrabold uppercase first-letter:text-primary sm:text-4xl">
          Контакти
        </h1>
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left Side - Company Info */}
          <div className="text-dark sm:space-y-6 md:w-1/2">
            <h2 className="hidden font-main text-xl font-extrabold uppercase first-letter:text-primary sm:text-2xl md:block">
              Контактна інформація
            </h2>
            <div className="font-main text-lg sm:text-xl">
              <div className="mx-auto space-y-6">
                {/* Address */}
                <div
                  className="flex cursor-pointer gap-3"
                  onClick={handleMapClick}
                  role="button"
                  tabIndex={0}
                >
                  <FaLocationDot className="h-6 w-6 text-primary" />
                  <div className="flex max-w-sm flex-col transition-colors duration-300 hover:text-primary">
                    {contactInfo.address}
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4">
                  <CgPhone className="h-6 w-6 text-primary" />
                  <div className="flex flex-col gap-1 font-semibold">
                    {contactInfo.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="transition-colors duration-300 hover:text-primary"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Email */}
                <a
                  href="mailto:graniteworld@gmail.com"
                  className="flex items-center gap-3 font-semibold transition-colors duration-300 hover:text-primary"
                >
                  <CgMail className="h-6 w-6 text-primary" />
                  <span>{contactInfo.email}</span>
                </a>
                {/* Working Hours */}
                <div className="flex gap-3">
                  <RiCalendarScheduleFill className="h-6 w-6 text-primary" />
                  <div>
                    <p>
                      <span className="font-semibold">Графік роботи: </span>
                      {contactInfo.hours.working}
                    </p>
                    <p>
                      <span className="mt-2 font-semibold">Вихідні: </span>
                      {contactInfo.hours.daysOff}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 pl-10">
                  {socialMediaPlatforms.map(({ name, icon: Icon, link, color }) => (
                    <SocialMediaIcon key={name} name={name} link={link} color={color} Icon={Icon} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="h-96 overflow-hidden rounded-lg bg-gray-100 shadow-xl md:h-auto md:w-1/2">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map location of Granite World"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
