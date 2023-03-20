import React from "react";
import classNames from "classnames";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const InputField = ({
  label,
  type = "text",
  placeholder = "Type here",
  className,
  ...inputProps
}: InputFieldProps) => {
  return (
    <div className={classNames("form-control w-full")}>
      {label ? (
        <label className="label">
          <span className={classNames("label-text")}>{label}</span>
        </label>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        className={classNames("input input-bordered w-full", className)}
        {...inputProps}
      />
    </div>
  );
};

export default InputField;
