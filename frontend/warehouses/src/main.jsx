import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import RegistrationForm from "./Components/Forms/RegistrationForm";
import InformationBox from "./Components/Test/InformationBox";
import { Provider } from "react-redux";
import { store } from "./store/reduxStore";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <p>Start</p> },
      { path: "/registration", element: <RegistrationForm /> },
      { path: "/demonstration", element: <p>Hey there demo</p> },
      { path: "/fetchtest", element: <InformationBox /> },
      // {
      //   path: "/watchlist",
      //   element: <Watchlist />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router router={router} />
    </Provider>
  </React.StrictMode>
);
