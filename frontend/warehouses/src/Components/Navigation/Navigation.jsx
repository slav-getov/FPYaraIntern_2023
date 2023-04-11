import React from "react";
import ActionableButton from "../Shared/ActionableButton";
import ListItem from "../Shared/ListItem";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="flex flex-wrap">
      <ul className="flex flex-col basis-1/2 md:flex-row md:justify-around lg:justify-between">
        <ListItem value="Register" className="p-1 md:p-5" />
        <ListItem value="See demonstration" className="p-1 md:p-5" />
      </ul>
      <NavLink
        to="/registration"
        className="h-10 text-justify text-white transition-colors duration-200 bg-blue-500 border-2 border-none hover:bg-blue-600 focus:bg-blue-700"
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Navigation;
