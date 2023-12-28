import { createBrowserRouter } from "react-router-dom";
import RootPage from "../layouts/RootPage";
import HomePage from "../pages/Home/HomePage";
import SingleNewsPage from "../pages/SingleNewsPage/SingleNewsPage";

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
    ],
  },
]);

export default router;
