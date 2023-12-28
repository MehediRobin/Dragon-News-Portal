import { createBrowserRouter } from "react-router-dom";
import RootPage from "../layouts/RootPage";
import HomePage from "../pages/Home/HomePage";
import SingleNewsPage from "../pages/SingleNewsPage/SingleNewsPage";
import LogInPage from "../pages/Login/LogInPage";
import RegisterPage from "../pages/Register/RegisterPage";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <SingleNewsPage />
          </PrivateRoute>
        ),
        loader: () => fetch("news.json"),
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
