import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { TTaskControls } from "./type";
import { TaskFilter } from "@components";
import { taskControlsBox, tasksCounterStyle } from "./styles";

export const TaskControls: FC<TTaskControls> = ({
  tasks,
  onClearCompleted,
  ...filterProps
}) => {
  const completedCount = tasks.filter((t) => t.isCompleted).length;
  const activeCount = tasks.length - completedCount;

  return (
    <Box sx={taskControlsBox}>
      <Typography sx={tasksCounterStyle} color='textSecondary'>
        {activeCount} item{activeCount === 1 ? "" : "s"} left
      </Typography>

      <TaskFilter {...filterProps} />

      <Button
        size="small"
        variant="outlined"
        disabled={!completedCount}
        onClick={onClearCompleted}
      >
        Clear completed
      </Button>
    </Box>
  );
};
