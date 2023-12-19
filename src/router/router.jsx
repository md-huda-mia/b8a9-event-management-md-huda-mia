const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <></>,
      },
    ],
  },
]);
export default router;
