import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Test from "./test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Test />,
      },
      {
        path: "app",
        element: <App />,
      },
    ],
  },
]);

export default router;
