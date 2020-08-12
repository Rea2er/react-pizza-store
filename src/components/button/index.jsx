import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ className, children }) => {
  return (
    <button className={classNames("button", className)}>{children}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
