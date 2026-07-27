import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Card({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`
        rounded-[32px]
        border
        shadow-sm
        transition-all
        duration-300

        ${className}
      `}
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      {children}
    </div>
  );
}