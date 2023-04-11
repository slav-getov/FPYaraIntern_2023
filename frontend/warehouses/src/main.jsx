import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <p>Start</p> },
      { path: "/authentication", element: <p>Hey there auth</p> },
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
