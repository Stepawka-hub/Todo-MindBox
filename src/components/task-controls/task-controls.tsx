import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { TTaskControls } from "./type";
import { TaskFilter } from "@components";

export const TaskControls: FC<TTaskControls> = ({
  tasks,
  onClearCompleted,
  ...filterProps
}) => {
  const completedCount = tasks.filter((t) => t.isCompleted).length;
  const activeCount = tasks.length - completedCount;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Typography variant="body2">
        {activeCount} item{activeCount === 1 ? "" : "s"} left
      </Typography>

      <TaskFilter {...filterProps} />

      <Button
        size="small"
        disabled={!completedCount}
        onClick={onClearCompleted}
      >
        Clear completed
      </Button>
    </Box>
  );
};
