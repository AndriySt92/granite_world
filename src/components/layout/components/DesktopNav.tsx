import type { NavItem } from '../../../types/navigation';

import { DesktopNavItem } from './';

interface DesktopNavProps {
  items: NavItem[];
}

const DesktopNav = ({ items }: DesktopNavProps) => (
  <nav className="hidden h-full justify-between lg:flex">
    {items.map((item) => (
      <DesktopNavItem key={item.label} item={item} />
    ))}
  </nav>
);

export default DesktopNav;
