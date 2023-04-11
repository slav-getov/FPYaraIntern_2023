import React from "react";
import ActionableButton from "../Shared/ActionableButton";
const RegistrationForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Register here and test Epicenter today!</legend>
        <label>
          Enter first name
          <input type="text" name="first_name" />
        </label>
        <label>
          Enter last name
          <input type="text" name="last_name" />
        </label>
        <label>
          Enter your email
          <input type="text" name="email" />
        </label>
        <label>
          Enter your username
          <input type="text" name="username" />
        </label>
        <label>
          Enter your password
          <input type="password" name="password" />
        </label>
        <label>
          Repeat your password
          <input type="password" name="password_repeat" />
        </label>
        <label>
          Enter your phone number
          <input type="text" name="phone" />
        </label>
        <ActionableButton title="Register" />
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
