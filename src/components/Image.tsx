import { twMerge } from "tailwind-merge";

type ImageType = {
  src: string;
  alt?: string;
  className?:string
};

const Image = ({ src, alt, className }: ImageType) => {
  return (
    <div className={twMerge('w-full h-auto overflow-hidden',className)}>
      <div className={twMerge("w-full h-full")}>
        <img
          className={twMerge('w-full h-full object-cover object-center')}
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default Image;
