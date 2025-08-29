import { FC } from "react";
import { TTaskItemProps } from "./type";
import { Typography, Box, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export const TaskItem: FC<TTaskItemProps> = ({ id, text, isCompleted }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {isCompleted ? (
        <IconButton>
          <CheckCircleOutlineIcon />
        </IconButton>
      ) : (
        <IconButton>
          <RadioButtonUncheckedIcon />
        </IconButton>
      )}
      <Typography>{text}</Typography>
    </Box>
  );
};
