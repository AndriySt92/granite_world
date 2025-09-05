import type { ReactNode } from 'react';

import { cn } from '../../lib';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
  cols?: {
    default: number;
    sm: number;
    lg: number;
  };
}

const GridContainer = ({
  children,
  className,
  cols = { default: 1, sm: 2, lg: 4 },
}: GridContainerProps) => {
  return (
    <div
      className={cn(
        'grid gap-4',
        `grid-cols-${cols.default}`,
        `sm:grid-cols-${cols.sm}`,
        `lg:grid-cols-${cols.lg}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default GridContainer;
