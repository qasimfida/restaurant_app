import React, { ButtonHTMLAttributes } from 'react';
import { RightArrowIcon } from '../Icons';
import { cn } from '@/helpers/cn';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // Define button variants
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  className,
  onClick,
  icon,
  ...rest
}: IProps) => {
  const baseClasses = 'rounded-lg py-3 px-4 font-normal';
  let variantClasses = '';

  // Determine which variant to apply
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-primary hover:bg-primary-600 text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-white hover:bg-gray-200 text-dark';
      break;
    case 'danger':
      variantClasses =
        'bg-red hover:bg-red-600 text-white w-full flex justify-between';
      break;
    default:
      variantClasses = 'bg-blue-500 hover:bg-blue-600 text-white';
      break;
  }

  return (
    <button
      className={cn`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
      {icon && <RightArrowIcon /> }
    </button>
  );
};

export default Button;
