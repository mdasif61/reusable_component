import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeaderType = {
  children: ReactNode;
  className?: string;
};

const CardHeader = ({ children, className }: HeaderType) => {
  return (
    <div className={twMerge("mb-4", className)}>
      <h1 className={twMerge("text-xl font-semibold", className)}>
        {children}
      </h1>
    </div>
  );
};

export default CardHeader;
