import { FC, useEffect, useState } from "react";
import { TTask } from "@types";
import { mockTasks } from "@utils/mock";
import { AddTaskForm, TaskFilter, TaskItem } from "@components";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";

export const TaskList: FC = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const taskElements = tasks.map((t) => (
    <>
      <TaskItem key={t.id} {...t} />
      <Divider />
    </>
  ));

  return (
    <Paper>
      <AddTaskForm />
      <Box>
        {tasks.length ? (
          taskElements
        ) : (
          <Typography>Список задач пуст</Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {tasks.length}
        <TaskFilter />
        <Button>Clear completed</Button>
      </Box>
    </Paper>
  );
};
