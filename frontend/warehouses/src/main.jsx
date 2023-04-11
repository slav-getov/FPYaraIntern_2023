import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import RegistrationForm from "./Components/Forms/RegistrationForm";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <p>Start</p> },
      { path: "/registration", element: <RegistrationForm /> },
      { path: "/demonstration", element: <p>Hey there demo</p> },
      // {
      //   path: "/watchlist",
      //   element: <Watchlist />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router router={router} />
  </React.StrictMode>
);
