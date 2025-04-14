import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import clsx from 'clsx';

import type { NavItem } from '../Header';

import MobileNavItem from './MobileNavItem';

interface MobileNavProps {
  items: NavItem[];
}

const MobileNav = ({ items }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-md py-3 text-secondary transition-colors lg:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative h-6 w-6">
          <RxHamburgerMenu
            className={clsx('absolute h-full w-full transform transition-all duration-300', {
              'rotate-90 opacity-0': isOpen,
              'rotate-0 opacity-100': !isOpen,
            })}
          />
          <AiOutlineClose
            className={clsx('absolute h-full w-full transform transition-all duration-300', {
              'scale-100 rotate-0 opacity-100': isOpen,
              'scale-0 -rotate-90 opacity-0': !isOpen,
            })}
          />
        </div>
      </button>

      <div
        className={clsx(
          'overflow-hidden bg-dark-300 transition-all duration-300 ease-in-out lg:hidden',
          {
            'max-h-[1000px] py-2 opacity-100': isOpen,
            'max-h-0 opacity-0': !isOpen,
          },
        )}
      >
        <nav className="space-y-2">
          {items.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isActive={activeSubmenu === item.label}
              toggleSubmenu={() =>
                setActiveSubmenu(activeSubmenu === item.label ? null : item.label)
              }
            />
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
