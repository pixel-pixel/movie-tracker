import React, { HTMLAttributes } from 'react';
import './Button.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  btnType?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'big';
}

export const Button: React.FC<ButtonProps> = ({
  label = 'button',
  btnType = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) => {
  className = `button button--${btnType} button--${size} ` + className;

  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
};
