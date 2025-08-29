import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TTaskControls } from "./type";
import { TaskFilter } from "@components";
import ClearAllIcon from "@mui/icons-material/ClearAll";
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
      <Typography sx={tasksCounterStyle} color="textSecondary">
        {activeCount} item{activeCount === 1 ? "" : "s"} left
      </Typography>

      <TaskFilter {...filterProps} />

      <Button
        startIcon={<ClearAllIcon />}
        variant="outlined"
        disabled={!completedCount}
        onClick={onClearCompleted}
      >
        Clear completed
      </Button>
    </Box>
  );
};
