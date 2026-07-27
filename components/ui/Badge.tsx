import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement>;

export default function Badge({
  children,
  className = "",
  style,
  ...props
}: Props) {
  return (
    <span
      {...props}
      style={{
        backgroundColor: "color-mix(in srgb, var(--primary) 12%, var(--surface))",
        borderColor: "color-mix(in srgb, var(--primary) 20%, var(--border))",
        color: "var(--primary)",
        ...style,
      }}
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </span>
  );
}