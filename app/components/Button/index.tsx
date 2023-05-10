'use client'
import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void|undefined;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  type,
  danger,
  onClick,
  fullWidth,
  secondary,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
      rounded-lg 
      text-sm
      px-4
      py-3
      text-center
      justify-center
      items-center
      font-semibold
     focus-visible:outline
     focus-visible:outline-2
     focus-visible:outline-offset-2
 `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-red-600",
        !danger &&
          !secondary &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >{children}</button>
  );
};

export default Button;
