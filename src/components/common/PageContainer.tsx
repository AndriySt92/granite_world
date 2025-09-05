import type { ReactNode } from 'react';

import { cn } from '../../lib';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => (
  <div className={cn('container pt-12 sm:pt-16 lg:pt-20', className)}>
    <div className="spacing-sm">{children}</div>
  </div>
);

export default PageContainer;
