import React from "react";

// Stateless function component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h3 className="navbar-brand">Products count: {props.totalCounts}</h3>
    </nav>
  );
};

export default Navbar;
