import { TTask, TTaskUpdateHandler } from "@types";

export type TTaskItemProps = TTask & {
  handleTaskUpdate: TTaskUpdateHandler;
};
