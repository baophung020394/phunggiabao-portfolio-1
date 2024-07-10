import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: "" },
  { path: "/about", element: "" },
  { path: "/projects", element: "<OptInPage />" },
  { path: "/contact", element: "<LoginPage />" },
]);
