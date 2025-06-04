import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

const errorVariants = cva('text-error font-semibold', {
  variants: {
    size: {
      sm: 'text-sm',
      lg: 'text-2xl',
    },
    center: {
      true: 'text-center',
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    center: false,
  },
});

interface ErrorProps {
  message: string;
  size?: 'sm' | 'lg';
  center?: boolean;
  className?: string;
}

const Error = ({ message, size, center, className }: ErrorProps) => {
  return <div className={clsx(errorVariants({ size, center }), className)}>{message}</div>;
};

export default Error;
