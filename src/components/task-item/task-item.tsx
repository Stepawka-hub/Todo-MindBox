import { FC } from "react";
import { TTaskItemProps } from "./type";
import { Typography, Box, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export const TaskItem: FC<TTaskItemProps> = ({
  id,
  text,
  isCompleted,
  handleTaskUpdate,
}) => {
  const toggleCompletion = () => {
    handleTaskUpdate(id, { isCompleted: !isCompleted });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1 }}>
      <IconButton onClick={toggleCompletion}>
        {isCompleted ? (
          <CheckCircleOutlineIcon color="success" />
        ) : (
          <RadioButtonUncheckedIcon />
        )}
      </IconButton>
      <Typography>{text}</Typography>
    </Box>
  );
};
