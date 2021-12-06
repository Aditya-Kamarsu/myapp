import React from "react";
import styling from "../mystyle.module.css";

const Navbar = () => {
  return (
    <div className={styling.Nav}>
      <nav>
        <div class="container-fluid">
          <h1 class="navbar-brand" href="/">
            Navbar
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
