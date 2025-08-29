import { AddTaskForm, TAddTaskForm, TaskControls, TaskList } from "@components";
import { Grid, Paper, Typography } from "@mui/material";
import { TTask, TTaskFilter, TTaskUpdateHandler } from "@types";
import { filterTaskMap } from "@utils/constants";
import { mockTasks } from "@utils/mock";
import { nanoid } from "nanoid";
import { FC, useCallback, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";

export const TodoPage: FC = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [filter, setFilter] = useState<TTaskFilter>("all");

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const handleTaskUpdate: TTaskUpdateHandler = useCallback((id, updates) => {
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  }, []);

  const handleAddTask: SubmitHandler<TAddTaskForm> = useCallback(({ text }) => {
    const newTask: TTask = {
      id: nanoid(),
      text: text.trim(),
      isCompleted: false,
    };

    setTasks((p) => [...p, newTask]);
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((p) => p.filter((t) => !t.isCompleted));
  }, []);

  const handleFilterChange = useCallback((value: TTaskFilter) => {
    setFilter(value);
  }, []);

  const filteredTasks = tasks.filter(filterTaskMap[filter]);

  return (
    <Paper sx={{ p: 2, minHeight: "100vh", overflow: "hidden" }}>
      <Grid container direction="column">
        <Typography variant="h2" sx={{ mb: 1, textAlign: "center" }}>
          Todos
        </Typography>
        <Paper variant="outlined">
          <AddTaskForm onSubmit={handleAddTask} />

          <TaskList tasks={filteredTasks} handleTaskUpdate={handleTaskUpdate} />

          <TaskControls
            filter={filter}
            handleFilterChange={handleFilterChange}
            tasks={filteredTasks}
            onClearCompleted={clearCompleted}
          />
        </Paper>
      </Grid>
    </Paper>
  );
};
