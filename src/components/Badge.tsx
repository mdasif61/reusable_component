import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BadgeType = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeType) => {
  return (
    <div>
      <span
        className={twMerge(
          "text-gray-500 bg-gray-200 py-1 px-4 flex items-center justify-center rounded-full"
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default Badge;
