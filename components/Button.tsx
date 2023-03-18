import React from "react";

interface ButtonProps {
  isLink?: boolean;
  path?: string;
  content: string;
  variant?: string;
}

export const Button = ({
  isLink = false,
  path,
  content,
  variant,
  ...props
}: ButtonProps) => {
  if (isLink) {
    return (
      <a
        href={path}
        className={
          variant === "ghost"
            ? "btn btn-ghost text-white"
            : variant === "green"
            ? "btn bg-gbm-green-darker text-white hover:bg-gbm-green-dark hover:text-white border-none"
            : "btn bg-white text-black hover:bg-slate-300 hover:text-black border-none"
        }
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={
        variant === "ghost"
          ? "btn btn-ghost text-white"
          : variant === "green"
          ? "btn bg-gbm-green-darker text-white hover:bg-gbm-green-dark hover:text-white border-none"
          : "btn bg-white text-black hover:bg-slate-300 hover:text-black border-none"
      }
      {...props}
    >
      {content}
    </button>
  );
};
