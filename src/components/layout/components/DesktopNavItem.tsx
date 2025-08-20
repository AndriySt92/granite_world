import { useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import { useClickOutside } from '../../../hooks';
import type { NavItem } from '../../../types/navigation';

interface DesktopNavProps {
  item: NavItem;
}

const DesktopNavItem = ({ item }: DesktopNavProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useClickOutside(dropdownRef, false);

  const closeDropdown = () => setIsOpen(false);

  return (
    <div
      className="group relative mr-[1px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={item.path}
        onClick={closeDropdown}
        className="align-center hover:bg-dark-hover flex cursor-pointer bg-dark-100 px-4 py-4 font-main text-sm uppercase text-light transition-colors duration-300 hover:text-primary xl:px-6 xl:text-base"
      >
        {item.label}
        {item.subItems && (
          <IoMdArrowDropdown
            className={`ml-1 h-5 w-5 self-center transition-transform duration-300 xl:h-6 xl:w-6 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </NavLink>

      {item.subItems && (
        <div
          ref={dropdownRef}
          className={`absolute left-0 top-full min-w-[200px] origin-top scale-y-90 bg-dark-100 py-0 shadow-lg transition-all duration-300 ${
            isOpen ? 'pointer-events-auto scale-y-100 opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {item.subItems.map((subItem) => (
            <NavLink
              key={subItem.label}
              to={subItem.path}
              onClick={closeDropdown}
              className="hover:bg-dark-hover block border-b border-secondary/10 bg-dark-100 px-4 py-4 font-main text-lg text-light transition-colors duration-300 first-letter:capitalize last:border-0 hover:text-primary"
            >
              {subItem.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopNavItem;
