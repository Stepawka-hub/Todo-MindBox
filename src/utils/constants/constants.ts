import { TTask, TTaskFilterMap } from "@types";

export const MAX_TASK_TEXT_LENGTH = 255;

export const filterTaskMap: TTaskFilterMap = {
  all: () => true,
  completed: (task: TTask) => task.isCompleted,
  active: (task: TTask) => !task.isCompleted,
} as const;