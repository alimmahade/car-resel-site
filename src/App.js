import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Main from "./Layout/Main";
import SignUp from "./SignUp";
import Blog from "./Blog";
import ProductsCatagory from "./ProductsCatagory";
import About from "./About";
import CategoryDetails from "./CategoryDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/home",
          element: <Home></Home>,
          // loader: async () => {
          //   const data = await fetch("http://localhost:5000/category");
          //   return data;
          // },
        },

        { path: "/login", element: <Login></Login> },
        { path: "/signup", element: <SignUp></SignUp> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/about", element: <About></About> },
        { path: "/catagory", element: <ProductsCatagory></ProductsCatagory> },
        {
          path: "/categorydetails/:id",
          element: <CategoryDetails></CategoryDetails>,
          loader: async ({ params }) => {
            const data = await fetch(
              `http://localhost:5000/categorydetails/${params.id}`
            );
            return data;
          },
        },
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
