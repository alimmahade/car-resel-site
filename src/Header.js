import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthUserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content ">
        <h2 className="text-2xl font-bold text-red-500">CarBari</h2>
        <Link to="/home" className="btn btn-ghost normal-case">
          Home
        </Link>

        <Link to="/catagory" className="btn btn-ghost normal-case">
          Items
        </Link>

        <Link to="/signup" className="btn btn-ghost normal-case">
          Register
        </Link>
        <Link to="/blog" className="btn btn-ghost normal-case">
          Blog
        </Link>
        {user?.uid ? (
          <Link
            onClick={signOut}
            to="/login"
            className="btn btn-ghost normal-case"
          >
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className="btn btn-ghost normal-case">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
