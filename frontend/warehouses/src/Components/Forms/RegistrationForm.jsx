import React from "react";
import ActionableButton from "../Shared/ActionableButton";
//try to use LabelWithInput later or if finished!!!
import LabelWithInput from "./LabelWithInput";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterClientMutation } from "../../apis/client-api/clientApi";
import { setCurrentUser } from "../../slices/authSlice";
import { useForm } from "react-hook-form";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [registerClient, results] = useRegisterClientMutation();

  //this what we use for login
  //const [signInClient, result] = useSignInClientMutation();
  const onSubmit = (data) => {
    console.log(`This is before we register`, results);
    const values = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      username: data.username,
      password: data.password,
      phone: data.phone,
    };
    dispatch(setCurrentUser(data.email));
    registerClient(values);
    if (user) {
      console.log("got em");
      navigate("/profile");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-2 py-3 mb-5 rounded-lg shadow-lg"
    >
      <fieldset className="flex flex-col">
        <legend className="p-3 break-normal">
          <p className="text-xl md:text-2xl">Create your account</p>

          <p className="font-light text-gray-500">
            <span className="hidden display:inline md:inline">
              Start your journey now. Already have an account?
            </span>
            <span className="p-2 text-xl text-blue-600">
              <NavLink to="/login">Login here.</NavLink>
            </span>
          </p>
        </legend>
        <label className="p-1 md:self-left md:p-3">
          Enter first name
          <input
            type="text"
            name="first_name"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("first_name")}
          />
        </label>
        <label className="p-1 md:self-left md:p-3">
          Enter last name
          <input
            type="text"
            name="last_name"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("last_name")}
          />
        </label>
        <label className="p-1 md:self-left md:p-3">
          Enter your email
          <input
            type="text"
            name="email"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("email")}
          />
        </label>
        <label className="p-1 md:self-left md:p-3">
          Enter username
          <input
            type="text"
            name="username"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("username")}
          />
        </label>
        <label className="p-1 md:self-left md:p-3">
          Enter your password
          <input
            type="password"
            name="password"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("password")}
          />
        </label>
        <label className="p-1 md:self-left md:p-3">
          Repeat your password
          <input
            type="password"
            name="password_repeat"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("password_repeat")}
          />
        </label>
        <label className="p-1 md:self-left md:p-3">
          Enter your phone
          <input
            type="text"
            name="phone"
            className="p-1 bg-gray-300 rounded-md outline-none sm:mx-1 md:mx-2 md:m-2"
            {...register("phone")}
          />
        </label>
        <ActionableButton
          title="Join us"
          className="self-center px-3 py-2 text-white transition-colors duration-200 bg-blue-500 border-2 border-none rounded-md hover:bg-blue-600 focus:bg-blue-700"
        />
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
