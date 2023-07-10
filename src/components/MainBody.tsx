import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MainType={
    children:ReactNode,
    className?:string
}

const MainBody = ({children,className}:MainType) => {
    return (
        <div className={twMerge('p-5',className)}>
           {children} 
        </div>
    );
};

export default MainBody;