import { FC, useCallback, useState } from "react";
import { AddTaskForm, TaskControls, TaskList } from "@components";
import { useTasks } from "@hooks";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { TTaskFilter } from "@types";
import { filterTaskMap } from "@utils/constants";
import { mockTasks } from "@utils/mock";
import {
  contentStyle,
  headerContainerStyle,
  pageTitleStyle,
  pageWrapperStyle,
} from "./styles";

export const TodoPage: FC = () => {
  const {
    tasks,
    isTaskListExpanded,
    handleAddTask,
    handleTaskUpdate,
    toggleTaskList,
    clearCompleted,
  } = useTasks(mockTasks);
  const [filter, setFilter] = useState<TTaskFilter>("all");

  const handleFilterChange = useCallback((value: TTaskFilter) => {
    setFilter(value);
  }, []);

  const filteredTasks = tasks.filter(filterTaskMap[filter]);

  return (
    <Paper sx={pageWrapperStyle}>
      <Grid container direction="column">
        <Typography variant="h1" color="primary" sx={pageTitleStyle}>
          Todos
        </Typography>

        <Paper variant="outlined" sx={contentStyle}>
          <Box sx={headerContainerStyle}>
            <IconButton onClick={toggleTaskList}>
              {isTaskListExpanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>

            <Box sx={{ flex: 1 }}>
              <AddTaskForm onSubmit={handleAddTask} />
            </Box>
          </Box>

          <Divider />

          <Collapse in={isTaskListExpanded}>
            <TaskList
              tasks={filteredTasks}
              handleTaskUpdate={handleTaskUpdate}
            />
          </Collapse>

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
