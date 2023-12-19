import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
// import DetailsCard from "../Components/EventItems/DetailsCard";
import Details from "../Components/EventItems/Details";

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
