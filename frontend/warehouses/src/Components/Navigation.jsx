import React from "react";
import ActionableButton from "./Shared/ActionableButton";
const Navigation = () => {
  return (
    <div className="flex flex-wrap">
      <div className="bg-yellow-500 p-10 flex-auto">Flex item 1</div>
      <div className="bg-red-500">Flex item 1</div>
      <div className="bg-blue-500">Flex item 1</div>
      <ActionableButton
        title="Click me to reg"
        className="bg-blue-500 border-2 border-black"
      />
    </div>
  );
};

export default Navigation;
