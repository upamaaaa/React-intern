import React from "react";
import "../Button/Button.scss";

const Button = ({ onClick, disabled, text, ...props }) => {
  return (
    <div>
      <button
        className="dashboard__button"
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
