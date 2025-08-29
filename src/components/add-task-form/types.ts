import { SubmitHandler } from "react-hook-form";

export type AddTaskFormProps = {
  onSubmit: SubmitHandler<TAddTaskForm>;
};

export type TAddTaskForm = {
  text: string;
};
