import type { ReactNode } from 'react';
import { type IconType } from 'react-icons';

interface FooterContactItemProps {
  icon?: IconType;
  children: ReactNode;
  href?: string;
}

const FooterContactItem = ({ icon: Icon, children, href }: FooterContactItemProps) => (
  <a
    href={href}
    className="flex gap-1 text-white transition-colors duration-300 hover:text-primary sm:gap-3"
    rel="noopener noreferrer"
  >
    {Icon && <Icon className="h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6" />}
    {children}
  </a>
);

export default FooterContactItem;
