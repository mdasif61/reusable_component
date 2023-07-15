import { useLottie } from "lottie-react";
import tickMark from "../../../public/tickMark.json";
import error from "../../../public/error.json";
import { twMerge } from "tailwind-merge";
type ToastType = {
  text: string;
  type: string;
};

const Toast = ({ text, type }: ToastType) => {
  const options = {
    animationData:
      type === "success" ? tickMark : type === "error" ? error : "",
    loop: true,
  };

  const { View } = useLottie(options);

  const variant = {
    success: View,
    error: View,
  };

  return (
    <div className="hidden">
      <div className={twMerge('w-auto px-5 py-1 items-center justify-center rounded-full h-12 flex absolute bg-gray-800')}>
        <div className="w-7">{variant[type]}</div>
        <span className="text-white font-semibold ml-2">{text}</span>
      </div>
    </div>
  );
};

export default Toast;
