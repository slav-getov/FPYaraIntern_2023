import React from "react";

const LabelWithInput = ({ labelValue, inputType, inputName }) => {
  return (
    <label className="p-1 md:p-3">
      {labelValue}
      <input
        type={inputType}
        name={inputName}
        className="p-1 m-1 bg-gray-300 outline-none md:p-1 md:m-2"
      />
    </label>
  );
};

export default LabelWithInput;
