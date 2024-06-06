import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupabaseTest from "./pages/SupaTest";
import LandingPage from "./pages/Landing"
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/supbaseTest",
    element: <SupabaseTest />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
