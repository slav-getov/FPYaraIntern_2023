import React from "react";
import ActionableButton from "../Shared/ActionableButton";
import ListItem from "../Shared/ListItem";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nullCurrentUser } from "../../slices/authSlice";
const Navigation = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-wrap justify-around">
      <ul className="flex flex-col basis-3/4 md:flex-row md:justify-around lg:justify-between">
        <ListItem value="Epicenter" className="p-1 md:p-5" />
        <NavLink to="/fetchtest">
          <ListItem
            value="See demonstration"
            className="p-1 rounded-md md:p-5 hover:shadow-lg"
          />
        </NavLink>
        {!user ? (
          <NavLink to="/registration">
            <ListItem
              value="Register"
              className="p-1 rounded-md md:p-5 hover:shadow-lg"
            />
          </NavLink>
        ) : (
          <ActionableButton
            title={`Logout ${user}`}
            className="self-center px-3 py-2 text-white transition-colors duration-200 bg-blue-500 border-2 border-none rounded-md hover:bg-blue-600 focus:bg-blue-700"
            onClick={() => dispatch(nullCurrentUser())}
          />
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
