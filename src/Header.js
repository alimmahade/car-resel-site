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
      <div className="navbar shadow p-4">
        <div className="navbar-start p-4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home" className="btn btn-ghost p-4">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catagory" className="btn btn-ghost p-4">
                  Items
                </Link>
              </li>

              <li>
                <Link to="/signup" className="btn btn-ghost p-4">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/blog" className="btn btn-ghost p-4">
                  Blog
                </Link>
              </li>

              <li>
                {user?.uid ? (
                  <Link
                    onClick={signOut}
                    to="/login"
                    className="btn btn-ghost p-4"
                  >
                    Sign Out
                  </Link>
                ) : (
                  <Link to="/login" className="btn btn-ghost p-4">
                    Log in
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link to="/home">
            <h2 className="text-3xl font-bold text-red-500">CarBari</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-4">
            <li>
              <Link to="/home" className="btn btn-ghost p-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/catagory" className="btn btn-ghost p-4">
                Items
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/blog" className="btn btn-ghost p-4">
                Blog
              </Link>
            </li>
            <li>
              {user?.uid ? (
                <Link
                  onClick={signOut}
                  to="/login"
                  className="btn btn-ghost p-4"
                >
                  Sign Out
                </Link>
              ) : (
                <Link to="/login" className="btn btn-ghost p-4">
                  Log in
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
