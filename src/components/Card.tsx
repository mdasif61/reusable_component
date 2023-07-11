import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardType = {
  children: ReactNode,
  className?: string
};

const Card = ({ children, className }: CardType) => {
  return (
      <div className={twMerge("border w-80 overflow-hidden", className)}>
        {children}
      </div>
  );
};

export default Card;
