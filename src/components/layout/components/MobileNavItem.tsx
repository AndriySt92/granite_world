import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import type { NavItem } from '../../../types/navigation';

interface MobileNavItemProps {
  item: NavItem;
  isActive: boolean;
  toggleSubmenu: () => void;
  closeMenu: () => void;
}

export const MobileNavItem = ({ item, isActive, toggleSubmenu, closeMenu }: MobileNavItemProps) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <div className="border-b border-secondary/10 last:border-0">
      <div className="flex items-center">
        <NavLink
          to={item.path}
          className={clsx(
            'flex-1 py-3 font-main text-lg font-medium tracking-wide',
            isActive ? 'text-primary' : 'text-light',
          )}
          onClick={handleClick}
        >
          {item.label}
        </NavLink>
        {item.subItems && (
          <button
            onClick={toggleSubmenu}
            className="flex items-center justify-between px-4 py-3 font-medium text-light"
            aria-expanded={isActive}
          >
            <IoMdArrowDropdown
              className={clsx('mt-[3px] h-5 w-5 transform transition-transform', {
                'rotate-180 text-primary': isActive,
              })}
            />
          </button>
        )}
      </div>

      {item.subItems && (
        <div className="pb-2">
          <div
            className={clsx(
              'overflow-hidden border-l-2 border-primary pl-1 transition-all duration-300 ease-in-out',
              {
                'max-h-[500px] opacity-100': isActive,
                'max-h-0 opacity-0': !isActive,
              },
            )}
          >
            {item.subItems.map((subItem) => (
              <NavLink
                key={subItem.label}
                to={subItem.path}
                className="block py-2 pl-4 font-main tracking-wide text-light"
                onClick={handleClick}
              >
                {subItem.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavItem;
