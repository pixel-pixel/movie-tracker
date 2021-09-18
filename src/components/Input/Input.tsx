import React, { FC, InputHTMLAttributes } from 'react';
import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: FC<InputProps> = ({
  className,
  name,
  type,
  placeholder,
  error,
  ...props
}) => {
  className = 'input ' + className
  className += error ? ' error' : ''
  className += ' ' + type

  return (
    <label className="input-wrapper">
      <input
          className={className}
          id={'input__' + name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
      />
      <p className="input__error-text">{ error }</p>
    </label>
  )
}
