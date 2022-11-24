import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Details from "./Details";
import Login from "./Login";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/details", element: <Details></Details> },
        { path: "/login", element: <Login></Login> },
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
