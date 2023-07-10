import {ReactNode} from 'react';
import { twMerge } from 'tailwind-merge';

type FooterType={
    children:ReactNode
}

const CardFooter = ({children}:FooterType) => {
    return (
        <div className={twMerge('flex justify-between items-center')}>
            {children}
        </div>
    );
};

export default CardFooter;