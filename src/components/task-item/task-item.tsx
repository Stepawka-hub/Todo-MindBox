import { FC } from "react";
import { TTaskItemProps } from "./type";
import { Typography, Box, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { containerStyle, iconStyle, taskTextStyle } from "./styles";

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
    <Box sx={containerStyle}>
      <IconButton onClick={toggleCompletion}>
        {isCompleted ? (
          <CheckCircleOutlineIcon style={iconStyle} color="success" />
        ) : (
          <RadioButtonUncheckedIcon style={iconStyle} />
        )}
      </IconButton>
      <Typography
        sx={{
          ...taskTextStyle.base,
          ...(isCompleted ? taskTextStyle.completed : taskTextStyle.active),
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
