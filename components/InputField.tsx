import React from "react";
import classNames from "classnames";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
}

const InputField = ({
  label,
  type = "text",
  placeholder = "Type here",
  ...inputProps
}: InputFieldProps) => {
  return (
    <div className={classNames("form-control w-full")}>
      {label ? (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        className={classNames("input input-bordered w-full")}
        {...inputProps}
      />
    </div>
  );
};

export default InputField;
