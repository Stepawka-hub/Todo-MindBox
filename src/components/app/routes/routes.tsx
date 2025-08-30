import { TodoPage } from "@pages";
import { createHashRouter, Navigate } from "react-router-dom";
import { PATHS } from "./constants";

export const router = createHashRouter([
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
