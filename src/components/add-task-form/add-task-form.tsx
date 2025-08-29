import { FC } from "react";
import { useForm } from "react-hook-form";
import { MAX_TASK_TEXT_LENGTH } from "@utils/constants";
import { maxLengthValidation, requiredValidation } from "@utils/helpers";
import { AddTaskFormProps, TAddTaskForm } from "./types";

export const AddTaskForm: FC<AddTaskFormProps> = ({ onSubmit }) => {
  const { register, reset, handleSubmit } = useForm<TAddTaskForm>({
    mode: "onChange",
  });

  const handleFormSubmit = (data: TAddTaskForm) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <fieldset>
        <input
          placeholder={"What need to be done?"}
          {...register("text", {
            ...requiredValidation(),
            ...maxLengthValidation(MAX_TASK_TEXT_LENGTH),
          })}
        />
      </fieldset>
    </form>
  );
};
