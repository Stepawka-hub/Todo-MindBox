import { TTask, TTaskUpdateHandler } from "@types";

export type TaskListProps = {
  tasks: TTask[];
  handleTaskUpdate: TTaskUpdateHandler;
};
