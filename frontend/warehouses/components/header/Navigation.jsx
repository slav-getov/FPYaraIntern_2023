import React from "react";

const Navigation = ({ items }) => {
  return (
    <nav className="font-bold">
      <ul>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
