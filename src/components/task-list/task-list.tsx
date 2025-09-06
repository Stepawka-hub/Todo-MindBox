import { TaskItem } from "@components";
import { Box, Divider, Typography } from "@mui/material";
import { FC, Fragment } from "react";
import { TaskListProps } from "./type";
import { emptyListStyle, listStyle } from "./styles";

export const TaskList: FC<TaskListProps> = ({ tasks, handleTaskUpdate }) => {
  const taskElements = tasks.map((t) => (
    <Fragment key={t.id}>
      <TaskItem {...t} handleTaskUpdate={handleTaskUpdate} />
      <Divider />
    </Fragment>
  ));

  return (
    <Box component="section" sx={listStyle}>
      {tasks.length ? (
        taskElements
      ) : (
        <Typography sx={emptyListStyle}>Список задач пуст</Typography>
      )}
    </Box>
  );
};
