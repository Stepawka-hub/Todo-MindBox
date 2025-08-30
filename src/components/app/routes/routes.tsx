import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./constants";
import { TodoPage } from "@pages";

export const router = createBrowserRouter([
  {
    path: PATHS.index,
    element: <Navigate to={PATHS.toDo} replace />,
  },
  {
    path: PATHS.toDo,
    element: <TodoPage />,
  },
  {
    path: PATHS.notFound,
    element: <div>Not Found</div>,
  },
]);
