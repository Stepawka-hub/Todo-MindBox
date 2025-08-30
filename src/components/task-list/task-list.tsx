import { TaskItem } from "@components";
import { Box, Divider, Typography } from "@mui/material";
import { FC, Fragment } from "react";
import { TaskListProps } from "./type";
import { listStyle } from "./styles";

export const TaskList: FC<TaskListProps> = ({ tasks, handleTaskUpdate }) => {
  const taskElements = tasks.map((t) => (
    <Fragment key={t.id}>
      <TaskItem {...t} handleTaskUpdate={handleTaskUpdate} />
      <Divider />
    </Fragment>
  ));

  return (
    <Box sx={listStyle}>
      {tasks.length ? taskElements : <Typography>Список задач пуст</Typography>}
    </Box>
  );
};
