import React from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
import clsx from "clsx";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors;
}
const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  disabled,
  error,
  type,
}) => {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `form-input
          block
          py-2
          w-full
          rounded
          border-0
          text-gray-900
          shadow-sm
          ring-1
          ring-inset
          ring-gray-300
          placeholder-gray-500
          focus:ring-2
          focus:ring-inset
          focus:ring-sky-600
          sm:text-sm
          sm:leading-6
          
          `,
            error[id] && "ring-red-600",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};
export default Input;
