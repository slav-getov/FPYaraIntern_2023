import React from "react";
import { useForm } from "react-hook-form";
const LabelWithInput = ({ labelValue, inputType, inputName }) => {
  const { register } = useForm();
  return (
    <label className="p-1 md:p-3">
      {labelValue}
      <input
        type={inputType}
        name={inputName}
        className="p-1 m-1 bg-gray-300 outline-none md:p-1 md:m-2"
        {...register(inputName)}
      />
    </label>
  );
};

export default LabelWithInput;
