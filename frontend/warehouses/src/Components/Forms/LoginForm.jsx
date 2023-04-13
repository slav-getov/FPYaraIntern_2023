import React from "react";
import ActionableButton from "../Shared/ActionableButton";
const LoginForm = () => {
  return (
    <div>
      <form className="px-2 py-3 mb-5 rounded-lg shadow-lg">
        <legend>This is where you login, friend</legend>
        <fieldset className="flex flex-col">
          <label className="p-1 md:self-center md:p-3">
            Enter email
            <input
              type="text"
              name="email"
              className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            />
          </label>
          <label className="p-1 md:self-center md:p-3">
            Enter password
            <input
              type="text"
              name="password"
              className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            />
          </label>
          <ActionableButton
            title="Login"
            className="self-center px-3 py-2 text-white transition-colors duration-200 bg-blue-500 border-2 border-none rounded-md hover:bg-blue-600 focus:bg-blue-700"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
