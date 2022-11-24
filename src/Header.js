import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthUserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/catagory" className="btn btn-ghost normal-case text-xl">
          Product Catagory
        </Link>

        <Link to="/signup" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        <Link to="/blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </Link>
        {user?.uid ? (
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
