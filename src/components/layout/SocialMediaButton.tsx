import { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
import clsx from 'clsx';

import { socialMediaPlatforms } from '../../constants';
import { useClickOutside } from '../../hooks';

const SocialMediaButton = () => {
  const socialRef = useRef<HTMLDivElement>(null);
  const [isSocialOpen, setIsSocialOpen] = useClickOutside(socialRef, false);

  const toggleSocialMenu = () => {
    setIsSocialOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-16 right-2 z-50 flex flex-col items-end gap-3 sm:bottom-20 sm:right-5">
      {/* Social links */}
      <div
        className={clsx(
          'flex flex-col gap-3 transition-all duration-300',
          isSocialOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-10 opacity-0',
        )}
      >
        {socialMediaPlatforms.map(({ name, icon: Icon, link, color }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'mb-2 flex items-center justify-center rounded-full bg-white p-3 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-100',
              color,
            )}
          >
            <Icon size={26} />
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <div
        ref={socialRef}
        className={clsx(
          'flex cursor-pointer items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl',
          isSocialOpen ? 'bg-white hover:bg-gray-100' : 'bg-primary',
        )}
        onClick={toggleSocialMenu}
      >
        <div className="relative h-[48px] w-[48px] sm:h-[52px] sm:w-[52px]">
          <AiOutlineClose
            className={clsx(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-dark transition-all duration-300 sm:text-4xl',
              isSocialOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0',
            )}
          />
          <MdOutlineMessage
            className={clsx(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white transition-all duration-300 sm:text-4xl',
              isSocialOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100',
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaButton;
