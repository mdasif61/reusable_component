import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputType = HTMLAttributes<HTMLInputElement> & {
  label?: string | undefined;
  className?: string | undefined;
  type: string;
  placeholder: string;
  labelStyle?: string;
};

const Input = ({
  label,
  className,
  type,
  placeholder,
  labelStyle,
  ...rest
}: InputType) => {
  return (
    <div className="w-full">
      <label htmlFor={label}>
        <span className={twMerge("text-gray-600 font-semibold", labelStyle)}>
          {label}
        </span>
      </label>
      <br />
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        className={twMerge(
          "py-2 px-4 h-12 focus:outline-none border border-blue-600 w-full focus:border-b mt-2 mb-4 focus:bg-blue-100 focus:border-l-4 focus:border-t-0 focus:border-r-0 text-blue-600 font-semibold",
          className
        )}
      />
    </div>
  );
};

export default Input;
