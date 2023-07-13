import { ReactNode } from "react";
import Button from "../Button";
import { twMerge } from "tailwind-merge";
type ModalType = {
  children: ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const Modal = ({ children, setOpen, className }: ModalType) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-zinc-200 bg-opacity-30">
      <dialog
        open
        className={twMerge(
          "bg-gray-800 rounded-xl md:w-5/12 w-full p-5",
          className
        )}
      >
        <Button

          color="error"
          radius="r-full"
          className="absolute btn-sm -top-4 -right-4"
          onClick={() => setOpen(false)}
        >
          X
        </Button>
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
