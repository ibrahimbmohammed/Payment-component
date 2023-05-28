import React, { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  className?: string;
  type: string;
  maxLength?: number;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  maxLength,
  placeholder,
  value,
  onChange,
  dataTestId,
}) => {
  return (
    <input
      className={twMerge(
        `text-bgPurple w-full font-[500] peer text-sm sm:text-lg rounded-md bg-white py-[1rem] pl-1 sm:pl-[4rem] border outline-none placeholder:text-[#BEC4D2] focus:outline focus:outline-primaryBlue focus:outline-offset-0 focus:bg-primaryBlue/10 focus:text-primaryBlue focus:placeholder:text-primaryBlue ${className}`
      )}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-testid={dataTestId}
    />
  );
};

export default Input;
