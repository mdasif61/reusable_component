import { MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import '../Css/Button.css'

type ButtonType =React.ButtonHTMLAttributes<HTMLButtonElement>&{
  children: ReactNode;
  color?: "success" | "primary" | "error" | "neutral";
  variant?: "outlined";
  radius?: "r-sm" | "r-md" | "r-lg" | "r-full" | "r-none";
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string,
  gradient?: 'g-primary' | 'g-success' | 'g-error' | 'g-neutral'
};

const Button = ({
  children,
  color = "primary",
  className,
  variant,
  radius = "r-md",
  onClick,
  gradient,
  ...rest
}: ButtonType) => {

  const colors = {

    success: `btn m-2 hover:bg-green-600 bg-green-500 ${!variant ? "border-none" : ""
      } text-white`,

    primary: `btn m-2 bg-blue-500 ${!variant ? "border-none" : ""
      } text-white hover:bg-blue-600`,

    error: `btn m-2 bg-red-500 ${!variant ? "border-none" : ""
      } text-white hover:bg-red-600`,

    neutral: `btn m-2 bg-gray-800 ${!variant ? "border-none" : ""
      } text-white hover:bg-gray-900`
  };

  const variants = {
    outlined: `btn bg-transparent ${color === "success"
      ? "border-green-500 border text-green-500 hover:text-white"
      : color === "primary"
        ? "border-blue-500 border text-blue-500 hover:text-white"
        : color === "error"
          ? "border-red-500 border text-red-500 hover:text-white"
          : color === 'neutral' ? 'border-gray-800 border text-gray-700 hover:text-white' : ''
      }`,
  };

  const gradientBtn = {
    'g-primary': 'g-primary',
    'g-success': 'g-success',
    'g-error':'g-error',
    'g-neutral':'g-neutral'
  }

  const rounded = {
    "r-sm": "rounded-sm",
    "r-md": "rounded-md",
    "r-lg": "rounded-lg",
    "r-none": "rounded-none",
    "r-full": "btn-circle",
  };

  const handleSend: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      {...rest}
      onClick={handleSend}
      className={twMerge(
        colors[color],
        variant ? variants[variant] : "",
        rounded[radius],
        gradient? gradientBtn[gradient]:"",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
