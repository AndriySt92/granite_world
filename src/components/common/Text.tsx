import type { ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/';

const textVariants = cva('font-main', {
  variants: {
    variant: {
      dark: 'text-dark',
      light: 'text-light',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
    size: {
      sm: 'text-sm sm:text-base',
      base: 'text-base sm:text-lg',
      lg: 'text-lg sm:text-xl',
      xl: 'text-xl',
    },

    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    hover: {
      primary: 'transition-colors duration-300 hover:text-primary',
      group: 'transition-colors duration-300 group-hover:text-primary',
      none: '',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'dark',
    weight: 'normal',
    hover: 'none',
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Text = ({
  as: Component = 'p',
  size,
  variant,
  weight,
  hover,
  className,
  children,
}: TextProps) => {
  return (
    <Component className={cn(textVariants({ size, variant, weight, hover, className }))}>
      {children}
    </Component>
  );
};

export default Text;
