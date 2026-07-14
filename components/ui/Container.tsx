import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}