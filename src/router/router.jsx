import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
// import DetailsCard from "../Components/EventItems/DetailsCard";
import Details from "../Components/EventItems/Details";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";
import About from "../pages/About";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
