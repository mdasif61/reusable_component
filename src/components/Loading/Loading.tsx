import {ReactNode} from 'react'
import { twMerge } from 'tailwind-merge';
import '../../components/Loading/Loading.css'

type LoadingType=React.StyleHTMLAttributes<HTMLStyleElement>&{
    children:ReactNode;
    fill:'fill-success'| 'fill-primary'|'fill-error'|'fill-neutral',
    outline:'outline-success'|'outline-primary'|'outline-error'| 'outline-neutral',
}

const Loading = ({ children,fill, outline='outline-success' }:LoadingType) => {

    const colors={
        'fill-success':'bg-green-500 border-none h-2 w-2 mx-1 rounded-full',
        'fill-primary':'bg-blue-500 border-none h-2 w-2 mx-1 rounded-full',
        'fill-error':'bg-red-500 border-none h-2 w-2 mx-1 rounded-full',
        'fill-neutral':'bg-gray-800 border-none h-2 w-2 mx-1 rounded-full'
    }

    const outlined={
      'outline-success':'h-2 w-2 mx-1 rounded-full border border-green-500',
      'outline-primary':'h-2 w-2 mx-1 rounded-full border border-blue-500',
      'outline-error':'h-2 w-2 mx-1 rounded-full border border-red-500',
      'outline-neutral':'h-2 w-2 mx-1 rounded-full border border-gray-800',
    }

  return (
    <div className="flex flex-col items-center justify-center">
      
      <div><h3 className={(twMerge('text-green-500 font-semibold'))}>{children}</h3></div>

      <div className="my-2 flex design">
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
        <div className={twMerge(colors[fill], !fill?outlined[outline]:'')}></div>
      </div>
    </div>
  );
};

export default Loading;
