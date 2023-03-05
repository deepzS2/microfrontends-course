import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routing/routes";

const browserRouter = createBrowserRouter(routes);

export default function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}