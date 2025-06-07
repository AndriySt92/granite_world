import { forwardRef } from 'react';
import { LuLoaderCircle } from 'react-icons/lu';
import { Link, type LinkProps } from 'react-router-dom';
import { cva, type VariantProps } from 'class-variance-authority';

import cn from '../../lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md border-2 border-transparent font-medium font-main focus:outline-none disabled:pointer-events-none disabled:opacity-50 duration-300 transition-all hover:shadow-md',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white hover:bg-primary/90 hover:border-primary',
        secondary: 'bg-secondary text-dark hover:bg-secondary/85 hover:border-secondary',
        danger: 'bg-error text-white hover:bg-error/85 hover:border-error',
        outline:
          'bg-transparent text-light border-2 border-light hover:text-light hover:bg-primary hover:border-primary',
      },
      size: {
        sm: 'py-2 px-3',
        md: 'py-2 px-4 text-base xl:text-lg',
        lg: 'py-3 px-6 text-lg xl:text-xl',
      },
      isIconOnly: {
        true: '!rounded-full',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      isIconOnly: false,
    },
  },
);

type ButtonAs = 'button' | typeof Link;

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  as?: ButtonAs;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isIconOnly?: boolean;
}

type ButtonProps<T extends ButtonAs> = (T extends 'button'
  ? React.ButtonHTMLAttributes<HTMLButtonElement>
  : LinkProps) &
  ButtonBaseProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps<ButtonAs>>(
  (
    {
      className,
      intent,
      size,
      as: Component = 'button',
      isLoading = false,
      loadingText = 'Завантаження',
      isIconOnly = false,
      iconPosition = 'left',
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const content = (
      <>
        {isLoading ? (
          <>
            <LuLoaderCircle className="mr-2 h-5 w-5 animate-spin" />
            <span>{loadingText}</span>
          </>
        ) : (
          <span className="flex items-center">
            {icon && (
              <span className={iconPosition === 'right' ? 'order-2' : 'order-1'}>{icon}</span>
            )}
            <span className={icon && iconPosition === 'right' ? 'order-1 mr-2' : 'order-2 ml-2'}>
              {children}
            </span>
          </span>
        )}
      </>
    );

    const commonProps = {
      className: cn(
        buttonVariants({ intent, size, isIconOnly }),
        className,
        isLoading && 'pointer-events-none',
      ),
      ...props,
    };

    return (
      <>
        {Component === 'button' ? (
          <button
            {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
          >
            {content}
          </button>
        ) : (
          <Link {...(commonProps as LinkProps)} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
            {content}
          </Link>
        )}
      </>
    );
  },
) as React.ForwardRefExoticComponent<
  ButtonProps<ButtonAs> & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
> & { displayName?: string };

Button.displayName = 'Button';

export default Button;
