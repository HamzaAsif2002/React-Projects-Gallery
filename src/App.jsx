import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layout/Layout";
import { JsProjects } from "./pages/jsprojects/JsProjects";
import { ReactProjects } from "./pages/reactProjects/ReactProjects";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ReactProjects />,
        },
        {
          path: "/jsprojects",
          element: <JsProjects />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
