import React from "react";

const ActionableButton = ({ title, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default ActionableButton;
