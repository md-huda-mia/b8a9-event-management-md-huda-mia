import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Details from "../Components/EventItems/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/details",
        element: <Details />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
