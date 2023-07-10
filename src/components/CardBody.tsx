import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BodyType = {
  children: ReactNode;
};

const CardBody = ({ children }: BodyType) => {
  return <div className={twMerge("text-gray-500 mb-2")}>{children}</div>;
};

export default CardBody;
