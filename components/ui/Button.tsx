import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  style,
  ...props
}: Props) {
  const variants = {
    primary: {
      backgroundColor: "var(--primary)",
      color: "#ffffff",
      border: "1px solid transparent",
    },

    secondary: {
      backgroundColor: "var(--surface)",
      color: "var(--foreground)",
      border: "1px solid var(--border)",
    },
  };

  return (
    <button
      {...props}
      style={{
        ...variants[variant],
        ...style,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        px-6
        py-3
        font-medium

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:shadow-md

        active:translate-y-0

        disabled:cursor-not-allowed
        disabled:opacity-60

        ${className}
      `}
    >
      {children}
    </button>
  );
}