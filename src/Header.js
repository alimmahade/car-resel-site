import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link to="home" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="login" className="btn btn-ghost normal-case text-xl">
          Log in
        </Link>
        <Link to="details" className="btn btn-ghost normal-case text-xl">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Header;
