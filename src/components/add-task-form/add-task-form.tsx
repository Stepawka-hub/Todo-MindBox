import { FC, memo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MAX_TASK_TEXT_LENGTH, TEST_IDS } from "@utils/constants";
import { maxLengthValidation, requiredValidation } from "@utils/helpers";
import { AddTaskFormProps, TAddTaskForm } from "./types";
import { Input } from "@ui";

export const AddTaskForm: FC<AddTaskFormProps> = memo(({ onSubmit }) => {
  const methods = useForm<TAddTaskForm>({
    mode: "onChange",
  });

  const { register, reset, handleSubmit } = methods;

  const handleFormSubmit = (data: TAddTaskForm) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          data-testid={TEST_IDS.ADDTASK_FORM.INPUT}
          placeholder={"What need to be done?"}
          {...register("text", {
            ...requiredValidation(),
            ...maxLengthValidation(MAX_TASK_TEXT_LENGTH),
          })}
        />
      </form>
    </FormProvider>
  );
});
