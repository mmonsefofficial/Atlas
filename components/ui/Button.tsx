import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        hover:-translate-y-0.5
        active:translate-y-0
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}