import type { ReactNode } from 'react';
import clsx from 'clsx';

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
      className={clsx(
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
