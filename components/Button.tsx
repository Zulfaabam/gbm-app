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
  const btnVariant =
    variant === "ghost"
      ? "btn btn-ghost text-white"
      : variant === "light-green"
      ? "btn bg-gbm-green-light text-white hover:bg-gbm-green-light hover:text-white border-none"
      : variant === "green"
      ? "btn bg-gbm-green-darker text-white hover:bg-gbm-green-dark hover:text-white border-none"
      : variant === "red"
      ? "btn bg-maroon text-white hover:bg-maroon hover:text-white border-none"
      : variant === "purple"
      ? "btn bg-gbm-purple text-white hover:bg-gbm-purple hover:text-white border-none"
      : variant === "cream"
      ? "btn bg-cream text-matcha hover:bg-cream hover:text-matcha border-none"
      : "btn bg-white text-black hover:bg-slate-300 hover:text-black border-none";

  if (isLink) {
    return (
      <a href={path} className={btnVariant} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={btnVariant} {...props}>
      {content}
    </button>
  );
};
