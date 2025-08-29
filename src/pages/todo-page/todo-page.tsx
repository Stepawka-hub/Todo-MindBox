import { AddTaskForm, TaskFilter, TaskList } from "@components";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { TTaskUpdateHandler, TTask } from "@types";
import { mockTasks } from "@utils/mock";
import { FC, useCallback, useEffect, useState } from "react";

export const TodoPage: FC = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const handleTaskUpdate: TTaskUpdateHandler = useCallback((id, updates) => {
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  }, []);

  return (
    <Paper sx={{ p: 2, minHeight: "100vh", overflow: "hidden" }}>
      <Grid container direction="column">
        <Typography variant="h3">Todos</Typography>
        <Paper>
          <AddTaskForm />

          <TaskList tasks={tasks} handleTaskUpdate={handleTaskUpdate} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {tasks.length}
            <TaskFilter />
            <Button>Clear completed</Button>
          </Box>
        </Paper>
      </Grid>
    </Paper>
  );
};
