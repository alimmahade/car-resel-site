import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Admin from "./Layout/Admin";
import Main from "./Layout/Main";
import AllProducts from "./Pages/AllProducts";
import Dashboard from "./Pages/Dashboard";
import NewProducts from "./Pages/NewProducts";

export const router = createBrowserRouter([
  { path: "/", element: <Main></Main>, children: [{ path: <Home /> }] },
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addnew",
        element: <NewProducts />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
    ],
  },
]);
