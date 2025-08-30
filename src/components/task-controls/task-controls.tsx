import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TTaskControls } from "./type";
import { TaskFilter } from "@components";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import {
  clearButtonStyle,
  filterBoxStyle,
  taskControlsBox,
  tasksCounterStyle,
} from "./styles";
import { TEST_IDS } from "@utils/constants";

export const TaskControls: FC<TTaskControls> = ({
  tasks,
  onClearCompleted,
  ...filterProps
}) => {
  const completedCount = tasks.filter((t) => t.isCompleted).length;
  const activeCount = tasks.length - completedCount;

  return (
    <Box sx={taskControlsBox}>
      <Typography
        data-testid={TEST_IDS.ITEMS_LEFT_COUNT}
        sx={tasksCounterStyle}
        color="textSecondary"
      >
        {activeCount} task{activeCount === 1 ? "" : "s"} left
      </Typography>

      <Box sx={filterBoxStyle}>
        <TaskFilter {...filterProps} />
      </Box>

      <Button
        data-testid={TEST_IDS.CLEAR_BTN}
        startIcon={<ClearAllIcon />}
        variant="outlined"
        disabled={!completedCount}
        onClick={onClearCompleted}
        sx={clearButtonStyle}
      >
        Clear completed
      </Button>
    </Box>
  );
};
