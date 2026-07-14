import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-5
        py-4
        outline-none
        transition
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
        ${className}
      `}
    />
  );
}