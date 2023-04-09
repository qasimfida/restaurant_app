import React, { ReactElement } from 'react';
import { LocationIcon } from '../Icons';
import { cn } from '@/helpers/cn';

interface IProps  {
  className?: string;
  prefix?: ReactElement | null;
  suffix?: ReactElement | null;
  placeholder?: string;
  value?: string,
  type?: string | undefined
}

const Input = (props:IProps) => {
  const { className, placeholder, prefix, type, suffix, ...rest } = props;
  if(type === 'checkbox') return <input
      type="checkbox"
      {...rest}
      className={cn`w-4 h-4 text-indigo-600 transition duration-150 ease-in-out bg-transparent border rounded appearance-none cursor-pointer select-none app__checkbox shrink-0 focus:shadow-checked checked:border-transparent checked:bg-primary ${className}`}
    />
  return (
    <div className="relative flex">
      {prefix}
      <input
        type={type}
        className={cn`${className} border border-grey-500 w-full px-3 h-14 rounded-lg bg-dark `}
        placeholder={placeholder}
        {...rest}
      />
      {suffix}
    </div>
  );
};

export default Input;
