import { FC, memo } from "react";
import { TTaskItemProps } from "./type";
import { Typography, Box, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { containerStyle, iconStyle, taskTextStyle } from "./styles";
import { TEST_IDS } from "@utils/constants";

export const TaskItem: FC<TTaskItemProps> = memo(
  ({ id, text, isCompleted, handleTaskUpdate }) => {
    const toggleCompletion = () => {
      handleTaskUpdate(id, { isCompleted: !isCompleted });
    };

    return (
      <Box data-testid={TEST_IDS.TASK_ITEM.CONTAINER} sx={containerStyle}>
        <IconButton
          data-testid={TEST_IDS.TASK_ITEM.TOGGLE}
          onClick={toggleCompletion}
          sx={{ "& svg": iconStyle }}
        >
          {isCompleted ? (
            <CheckCircleOutlineIcon color="success" />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <Typography
          data-testid={TEST_IDS.TASK_ITEM.TEXT}
          sx={{
            ...taskTextStyle.base,
            ...(isCompleted ? taskTextStyle.completed : taskTextStyle.active),
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
);
