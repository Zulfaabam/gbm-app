import classNames from "classnames";
import React from "react";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function InputField({
  label,
  type = "text",
  placeholder = "Ketik di sini",
  className,
  required,
  ...props
}: InputFieldProps) {
  return (
    <div className="form-control w-full">
      {label ? (
        <label className="label">
          <span className="label-text">{required ? `${label} *` : label}</span>
        </label>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        className={classNames("input input-bordered w-full", className)}
        {...props}
      />
    </div>
  );
}

export default InputField;
