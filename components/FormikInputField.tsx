import React from "react";
import classNames from "classnames";
import { FieldConfig, useField } from "formik";

export interface FormikInputFieldProps extends FieldConfig {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
}

const FormikInputField = ({
  label,
  type = "text",
  placeholder = "Type here",
  className,
  ...props
}: FormikInputFieldProps) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="form-control w-full">
      {label ? (
        <label htmlFor={props.name} className="label">
          <span className="label-text">{label}</span>
        </label>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        className={classNames("input input-bordered w-full", className)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInputField;
