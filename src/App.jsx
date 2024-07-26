import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

export default function () {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}
