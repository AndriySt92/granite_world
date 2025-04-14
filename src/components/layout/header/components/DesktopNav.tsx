import type { NavItem } from '../Header';

import { DesktopNavItem } from './';

interface DesktopNavProps {
  items: NavItem[];
}

const DesktopNav = ({ items }: DesktopNavProps) => (
  <nav className="hidden h-full space-x-1 lg:flex">
    {items.map((item) => (
      <DesktopNavItem item={item} />
    ))}
  </nav>
);

export default DesktopNav;
