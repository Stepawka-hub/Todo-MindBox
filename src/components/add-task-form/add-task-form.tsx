import { TextField } from "@mui/material";
import { FC } from "react";

export const AddTaskForm: FC = () => {
  return (
    <TextField
      sx={{ width: "100%" }}
      placeholder="What need to be done?"
    />
  );
};
