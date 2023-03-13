import React from "react";

const Button = ({ content, variant }) => {
  return (
    <button
      className={`btn ${
        variant === "ghost"
          ? "btn-ghost"
          : variant === "contain"
          ? "bg-white text-black hover:bg-gray-300 hover:text-black"
          : ""
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
