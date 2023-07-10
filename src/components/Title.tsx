import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TitleType={
    children:ReactNode,
    className?:string
}

const Title = ({children, className}:TitleType) => {
    return (
        <div>
            <h4 className={twMerge('font-semibold text-xl mt-5 mb-2', className)}>{children}</h4>
        </div>
    );
};

export default Title;