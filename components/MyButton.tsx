import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: React.ReactNode;
}

const MyButton = ({ content, className, ...props }: ButtonProps) => {
  return (
    <button className={className ? className : "btn-primary"} {...props}>
      {content}
    </button>
  );
};

export default MyButton;
