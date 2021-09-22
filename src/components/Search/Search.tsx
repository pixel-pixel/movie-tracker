import React, { FC, InputHTMLAttributes } from 'react';
import './Search.scss';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  error?: string | null;
}

export const Search: FC<SearchProps> = ({
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
