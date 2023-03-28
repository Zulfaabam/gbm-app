import React from "react";
import classNames from "classnames";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const InputField = ({
  name,
  label,
  type = "text",
  placeholder = "Type here",
  className,
  ...inputProps
}: InputFieldProps) => {
  return (
    <div className="form-control w-full">
      {label ? (
        <label htmlFor={name} className="label">
          <span className="label-text">{label}</span>
        </label>
      ) : null}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames("input input-bordered w-full", className)}
        {...inputProps}
      />
    </div>
  );
};

export default InputField;
