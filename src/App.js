import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Main from "./Layout/Main";
import SignUp from "./SignUp";
import Blog from "./Blog";

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
