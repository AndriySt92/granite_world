import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => (
  <div className={`container pt-12 sm:pt-16 lg:pt-20 ${className || ''}`}>
    <div className="section-spacing">{children}</div>
  </div>
);

export default PageContainer;
