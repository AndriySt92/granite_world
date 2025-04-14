import { MdKeyboardArrowDown } from 'react-icons/md';

import type { NavItem } from '../Header';

interface DesktopNavProps {
  item: NavItem;
}

const DesktopNavItem = ({ item }: DesktopNavProps) => (
  <div
    key={item.label}
    className="group relative mr-[1px] cursor-pointer bg-dark-100 px-5 py-4 font-main text-sm uppercase text-secondary transition-colors duration-300 hover:bg-dark-hover hover:text-primary xl:text-base"
  >
    <a href={item.href} className="align-center flex">
      {item.label}
      {item.subItems && (
        <MdKeyboardArrowDown className="ml-1 h-5 w-5 self-center duration-300 hover:text-primary group-hover:rotate-180 xl:h-6 xl:w-6" />
      )}
    </a>

    {item.subItems && (
      <div className="pointer-events-none absolute left-0 top-full min-w-[200px] origin-top scale-y-95 bg-dark-100 py-0 opacity-0 shadow-lg transition-all duration-300 group-hover:pointer-events-auto group-hover:scale-y-100 group-hover:opacity-100">
        {item.subItems.map((subItem) => (
          <a
            key={subItem.label}
            href={subItem.href}
            className="block bg-dark-100 px-4 py-3 text-base capitalize text-secondary transition-colors duration-300 hover:bg-dark-hover hover:text-primary"
          >
            {subItem.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default DesktopNavItem;
