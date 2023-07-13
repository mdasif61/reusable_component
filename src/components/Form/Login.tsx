import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LoginType = {
  children: ReactNode,
  className?:string
};

const Login = ({ children,className }: LoginType) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center min-h-screen w-full",className)}
    >
      {children}
    </div>
  );
};

export default Login;
