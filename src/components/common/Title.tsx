import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const titleVariants = cva('font-main font-extrabold', {
  variants: {
    variant: {
      dark: 'text-dark',
      light: 'text-light',
      darkWithAccent: 'text-dark first-letter:text-primary',
      lightWithAccent: 'text-light first-letter:text-primary',
    },
    size: {
      xs: 'text-lg sm:text-xl',
      sm: 'text-xl sm:text-2xl',
      md: 'text-3xl sm:text-4xl',
      lg: 'text-3xl sm:text-4xl lg:text-5xl',
    },
    uppercase: {
      true: 'uppercase',
      false: 'normal-case',
    },
    weight: {
      medium: 'font-medium',
      semibold: 'font-semibold',
      extrabold: 'font-extrabold',
    },
    align: {
      center: 'text-center',
      left: 'text-left',
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      className: 'tracking-wide text-center',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'darkWithAccent',
    align: 'left',
    uppercase: true,
    weight: 'extrabold',
  },
});

interface TitleProps extends VariantProps<typeof titleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
}

export const Title = ({
  as: Component = 'h2',
  size,
  variant,
  weight,
  align,
  uppercase,
  className,
  children,
}: TitleProps) => {
  return (
    <Component
      className={clsx(titleVariants({ size, variant, uppercase, weight, align }), className)}
    >
      {children}
    </Component>
  );
};

export default Title;
