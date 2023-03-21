import classNames from "classnames";
import React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isButton?: boolean;
}

const Link = ({ isButton, href, className, ...props }: LinkProps) => {
  return (
    <a
      href={href}
      className={classNames(className, { "btn border-none": isButton })}
      {...props}
    >
      Link
    </a>
  );
};

export default Link;
