import { PayMatchPage } from "@pages";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./constants";

export const router = createBrowserRouter([
  {
    path: PATHS.index,
    element: <Navigate to={PATHS.payMatch} replace />,
  },
  {
    path: PATHS.payMatch,
    element: <PayMatchPage />,
  },
  {
    path: PATHS.notFound,
    element: <div>Not Found</div>,
  },
]);
