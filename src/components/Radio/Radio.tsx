import React, { HTMLAttributes } from 'react';
import './Radio.scss'

export interface RadioProps extends HTMLAttributes<HTMLInputElement>{
  name: string
  label?: string
  value?: string
  size?: 'normal' | 'small'
}

export const Radio: React.FC<RadioProps> = ({
    name,
    label = '',
    value = label,
    size = 'normal',
    ...props
  }) => {
  const wrapperClasses = `radio radio--${size}`
  const inputClasses = 'radio__input'
  const labelClasses = 'radio__label'

  return (
    <div className={wrapperClasses}>
      <input
        className={inputClasses}
        type="radio"
        name={name}
        value={value}
        id={value + '-id'}
        {...props}
      />
      <label
        className={labelClasses}
        htmlFor={value + '-id'}
      >
        {label}
      </label>
    </div>
  );
};
