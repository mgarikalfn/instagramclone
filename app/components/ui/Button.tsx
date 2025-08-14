import React from 'react';

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const BUTTON_TYPE_CLASSES_MAP = {
  [BUTTON_TYPE_CLASSES.base]:
    "min-w-[165px] w-auto h-[50px] px-[35px] text-[15px] bg-[#E1306C] text-white uppercase font-bold border-none cursor-pointer flex justify-center items-center font-['Open_Sans_Condensed'] tracking-wide leading-[50px] hover:bg-white hover:text-[#E1306C] hover:border hover:border-[#E1306C] transition",
  [BUTTON_TYPE_CLASSES.google]:
    "min-w-[165px] w-auto h-[50px] px-[35px] text-[15px] bg-[#4285f4] text-white uppercase font-bold border-none cursor-pointer flex justify-center items-center font-['Open_Sans_Condensed'] tracking-wide leading-[50px] hover:bg-[#357ae8] transition",
  [BUTTON_TYPE_CLASSES.inverted]:
    "min-w-[165px] w-auto h-[50px] px-[35px] text-[15px] bg-white text-black uppercase font-bold border border-black cursor-pointer flex justify-center items-center font-['Open_Sans_Condensed'] tracking-wide leading-[50px] hover:bg-black hover:text-white hover:border-none transition",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType = BUTTON_TYPE_CLASSES.base, ...otherProps }) => {
  const className = BUTTON_TYPE_CLASSES_MAP[buttonType] || BUTTON_TYPE_CLASSES_MAP.base;
  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;