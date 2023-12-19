import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Details from "../Components/EventItems/Details";
import MainLayout from "../MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: () => fetch(`/data.json`),
      },
    ],
  },
]);
export default router;
