import React from "react";

interface Props {
  content: string;
  variant: string;
}

export const Button = ({ content, variant }: Props) => {
  return (
    <button
      className={
        variant === "ghost"
          ? "btn btn-ghost"
          : variant === "contain"
          ? "btn bg-white text-black hover:bg-slate-300 hover:text-black"
          : "btn"
      }
    >
      {content}
    </button>
  );
};
