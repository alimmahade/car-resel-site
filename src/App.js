import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Main from "./Layout/Main";
import SignUp from "./SignUp";
import Blog from "./Blog";
import ProductsCatagory from "./ProductsCatagory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },

        { path: "/login", element: <Login></Login> },
        { path: "/signup", element: <SignUp></SignUp> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/catagory", element: <ProductsCatagory></ProductsCatagory> },
        {
          path: "*",
          element: (
            <div>
              <h1 className="text-5xl font-bold">
                Unhandled Thrown Error! 404 Not Found ! This page is not found.
              </h1>
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
