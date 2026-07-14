import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement>;

export default function Badge({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <span
      {...props}
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-blue-100
        bg-blue-50
        px-4
        py-2
        text-sm
        font-medium
        text-blue-600
        ${className}
      `}
    >
      {children}
    </span>
  );
}