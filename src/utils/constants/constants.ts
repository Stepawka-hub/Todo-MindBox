import { TTask, TTaskFilterMap } from "@types";

export const filterTaskMap: TTaskFilterMap = {
  all: () => true,
  completed: (task: TTask) => task.isCompleted,
  uncompleted: (task: TTask) => !task.isCompleted,
} as const;
