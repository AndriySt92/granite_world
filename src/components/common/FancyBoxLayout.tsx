import type { ReactNode } from 'react';

import { useFancybox } from '../../hooks';

export const FancyboxLayout = ({ children }: { children: ReactNode }) => {
  useFancybox();

  return <>{children}</>;
};
