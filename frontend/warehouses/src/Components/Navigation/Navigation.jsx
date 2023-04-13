import React from "react";
import ActionableButton from "../Shared/ActionableButton";
import ListItem from "../Shared/ListItem";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navigation = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <nav className="flex flex-wrap justify-around">
      <ul className="flex flex-col basis-3/4 md:flex-row md:justify-around lg:justify-between">
        <ListItem value="Register" className="p-1 md:p-5" />
        <NavLink to="/fetchtest">
          <ListItem
            value="See demonstration"
            className="p-1 rounded-md md:p-5 hover:shadow-lg"
          />
        </NavLink>
      </ul>
      {!user ? (
        <NavLink
          to="/registration"
          className="text-white transition-colors duration-200 bg-blue-500 border-2 border-none hover:bg-blue-600 focus:bg-blue-700"
        >
          Register
        </NavLink>
      ) : (
        <ActionableButton title={`Logout ${user}`} />
      )}
    </nav>
  );
};

export default Navigation;
