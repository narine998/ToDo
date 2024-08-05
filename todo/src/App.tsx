import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HOME_PATH } from "./constants";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
