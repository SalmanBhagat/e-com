import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Register} from "./assets/Pages/auth/Block/Register";
import {ForgotPassword} from "./assets/Pages/auth/Block/ForgotPassword";
import {ResetPassword} from "./assets/Pages/auth/Block/ResetPassword";
import RoutingLayout from "./RoutingLayout";
import { Login } from "./assets/Pages/auth";

const rounting = createBrowserRouter([
  {
    path: "/",
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