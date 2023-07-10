import { MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = {
  children: ReactNode;
  color?: "success" | "primary" | "error";
  variant?: "outlined";
  radius?: "r-sm" | "r-md" | "r-lg" | "r-full" | "r-none";
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?:string
};

const Button = ({
  children,
  color = "primary",
  className,
  variant,
  radius = "r-md",
  onClick,
}: ButtonType) => {
  const colors = {
    success: `btn m-2 bg-green-500 ${
      !variant ? "border-none" : ""
    } text-white hover:bg-green-600`,
    primary: `btn m-2 bg-blue-500 ${
      !variant ? "border-none" : ""
    } text-white hover:bg-blue-600`,
    error: `btn m-2 bg-red-500 ${
      !variant ? "border-none" : ""
    } text-white hover:bg-red-600`,
  };

  const variants = {
    outlined: `btn bg-transparent ${
      color === "success"
        ? "border-green-500 border text-green-500 hover:text-white"
        : color === "primary"
        ? "border-blue-500 border text-blue-500 hover:text-white"
        : color === "error"
        ? "border-red-500 border text-red-500 hover:text-white"
        : ""
    }`,
  };

  const rounded = {
    "r-sm": "rounded-sm",
    "r-md": "rounded-md",
    "r-lg": "rounded-lg",
    "r-none": "rounded-none",
    "r-full": "rounded-full",
  };

  const handleSend: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleSend}
      className={twMerge(
        colors[color],
        variant ? variants[variant] : "",
        rounded[radius],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
