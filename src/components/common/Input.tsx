import type { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { cn } from '../../lib';

import { Error } from '.';

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  inputClassNames?: string;
  labelClassNames?: string;
  wrapperClassNames?: string;
  multiple?: boolean; // For file input
  accept?: string; // For file input
  disabled?: boolean;
}

const Input = <T extends FieldValues>({
  name,
  label,
  type = 'text',
  error,
  register,
  validation,
  inputClassNames,
  labelClassNames,
  wrapperClassNames,
  multiple,
  accept,
  ...rest
}: InputProps<T>) => {
  const isTypeFile = type === 'file';

  return (
    <div className={cn(wrapperClassNames, isTypeFile && 'flex flex-col gap-2')}>
      {label && (
        <label
          htmlFor={name}
          className={cn(labelClassNames, 'mb-1 font-main font-bold text-dark sm:text-lg')}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          type={type}
          className={cn(
            'w-full rounded-md px-3 py-2 shadow-sm placeholder:text-base placeholder:text-secondary-300 focus:outline-none sm:px-4 sm:py-3 sm:text-sm',
            error
              ? 'border-2 border-error shadow-md focus:ring-0'
              : 'border focus:border-primary focus:ring-primary',
            inputClassNames,
          )}
          {...register(name, validation)}
          {...(isTypeFile && { multiple: multiple, accept: accept })}
          {...rest}
        />
      </div>
      {error && <Error message={error} size="sm" />}
    </div>
  );
};

export default Input;
