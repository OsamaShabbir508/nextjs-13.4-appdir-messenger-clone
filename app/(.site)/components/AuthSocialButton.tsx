"use client";
import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  Icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={"button"}
      className="
         inline-block 
           flex
            w-full
            rounded
            ring-2
            ring-inset
            ring-gray-300
            hover:bg-gray-50
            focus:outline-offset-0
            px-1.5
            py-2.5
            justify-center
            items-center
            text-gray-400
            bg-white

   "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
