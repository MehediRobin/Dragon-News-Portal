import { createBrowserRouter } from "react-router-dom";
import RootPage from "../layouts/RootPage";
import HomePage from "../pages/Home/HomePage";
import SingleNewsPage from "../pages/SingleNewsPage/SingleNewsPage";
import LogInPage from "../pages/Login/LogInPage";
import RegisterPage from "../pages/Register/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <SingleNewsPage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
