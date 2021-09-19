import React, { FC, HTMLAttributes } from 'react';
import './Input.scss';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string,
  error?: string;
}

export const Input: FC<InputProps> = ({
  name,
  error,
  placeholder,
  className,
  ...props
}) => {
  className = 'input ' + className
  className += error ? ' error' : ''

  placeholder = placeholder ? placeholder : name

  return (
    <label className="input-wrapper">
      <input
          className={className}
          id={'input__' + name}
          name={name}
          placeholder={placeholder}
          {...props}
      />
      <p className="input__error-text">{ error }</p>
    </label>
  )
}