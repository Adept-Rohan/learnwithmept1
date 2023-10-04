import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InputField } from "../components/InputField";

const Layout = () => {
  return (
    <div>
      <InputField
        labels="Name"
        type="text"
        placeholder="Enter Your Name"
        required
      />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export const Router = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
