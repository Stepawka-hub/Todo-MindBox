import { AddTaskForm, TaskControls, TaskList } from "@components";
import { Grid, Paper, Typography } from "@mui/material";
import { TTask, TTaskFilter, TTaskUpdateHandler } from "@types";
import { mockTasks } from "@utils/mock";
import { FC, useCallback, useEffect, useState } from "react";

export const TodoPage: FC = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [filter, setFilter] = useState<TTaskFilter>("all");

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const handleTaskUpdate: TTaskUpdateHandler = useCallback((id, updates) => {
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((p) => p.filter((t) => !t.isCompleted));
  }, []);

  return (
    <Paper sx={{ p: 2, minHeight: "100vh", overflow: "hidden" }}>
      <Grid container direction="column">
        <Typography variant="h3" sx={{ mb: 1, textAlign: "center" }}>
          Todos
        </Typography>
        <Paper>
          <AddTaskForm />

          <TaskList tasks={filteredTasks} handleTaskUpdate={handleTaskUpdate} />

          <TaskControls
            tasks={filteredTasks}
            onClearCompleted={clearCompleted}
          />
        </Paper>
      </Grid>
    </Paper>
  );
};
