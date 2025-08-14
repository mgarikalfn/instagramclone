'use client'

import React, { useState, FocusEvent } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, placeholder, ...otherProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  const shrink = isFocused || (value && value.toString().length > 0);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false);

  return (
    <div className="relative my-11">
      <input
        className="bg-white text-gray-500 text-lg py-2 px-1 block w-full border-b border-gray-500 focus:outline-none"
        {...otherProps}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // Only show placeholder if no label is provided
        placeholder={label ? undefined : placeholder}
      />
      {label && (
        <label
          className={`absolute left-1 top-2 text-gray-500 text-base font-normal pointer-events-none transition-all duration-300
            ${shrink ? 'top-[-14px] text-xs text-black' : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

