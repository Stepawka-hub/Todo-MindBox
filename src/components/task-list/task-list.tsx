import { TaskItem } from "@components";
import { Box, Divider, Typography } from "@mui/material";
import { FC, memo } from "react";
import { TaskListProps } from "./type";
import { listStyle } from "./styles";

export const TaskList: FC<TaskListProps> = memo(
  ({ tasks, handleTaskUpdate }) => {
    const taskElements = tasks.map((t) => (
      <>
        <TaskItem key={t.id} {...t} handleTaskUpdate={handleTaskUpdate} />
        <Divider />
      </>
    ));

    return (
      <Box sx={listStyle}>
        {tasks.length ? (
          taskElements
        ) : (
          <Typography>Список задач пуст</Typography>
        )}
      </Box>
    );
  }
);
