import React from "react";
import { useSelector } from "react-redux";
const CommandPanel = () => {
  //get the state here perhaps on redirect
  const { user } = useSelector((state) => state.auth);
  return <section>Hello, this is the command panel {user}</section>;
};

export default CommandPanel;
