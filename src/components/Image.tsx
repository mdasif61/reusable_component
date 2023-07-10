type ImageType = {
  src: string;
  alt?: string;
};

const Image = ({ src, alt }: ImageType) => {
  return (
    <div className="w-full h-40 overflow-hidden">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-center"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default Image;
