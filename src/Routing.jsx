import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Register} from "./assets/Pages/auth";
import {ForgotPassword} from "./assets/Pages/auth";
import {ResetPassword} from "./assets/Pages/auth";
import RoutingLayout from "./RoutingLayout";
import { Login } from "./assets/Pages/auth";

const rounting = createBrowserRouter([
  {
    path: "/auth",
    element: <RoutingLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
]);

export default rounting;