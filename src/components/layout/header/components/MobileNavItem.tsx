import { MdKeyboardArrowDown } from 'react-icons/md';
import clsx from 'clsx';

import type { NavItem } from '../Header';

interface MobileNavItemProps {
  item: NavItem;
  isActive: boolean;
  toggleSubmenu: () => void;
}

export const MobileNavItem = ({ item, isActive, toggleSubmenu }: MobileNavItemProps) => (
  <div className="py-1">
    <div className="flex items-center">
      <a
        href={item.href}
        className="py-2 text-secondary"
        onClick={(e) => {
          if (item.subItems) {
            e.preventDefault();
            toggleSubmenu();
          }
        }}
      >
        {item.label}
      </a>
      {item.subItems && (
        <button
          onClick={toggleSubmenu}
          className="ml-1 text-xl text-secondary transition-colors"
          aria-expanded={isActive}
        >
          <MdKeyboardArrowDown
            className={clsx('mt-[3px] h-5 w-5 transform transition-transform', {
              'rotate-180': isActive,
            })}
          />
        </button>
      )}
    </div>

    {item.subItems && (
      <div
        className={clsx('overflow-hidden pl-4 transition-all duration-300 ease-in-out', {
          'max-h-[500px] opacity-100': isActive,
          'max-h-0 opacity-0': !isActive,
        })}
      >
        {item.subItems.map((subItem) => (
          <a
            key={subItem.label}
            href={subItem.href}
            className="block py-2 pl-4 text-secondary transition-colors hover:text-primary"
          >
            {subItem.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default MobileNavItem;
