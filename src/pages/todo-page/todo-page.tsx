import { TaskList } from "@components";
import { Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";

export const TodoPage: FC = () => {
  return (
    <Paper sx={{ p: 2, minHeight: "100vh", overflow: "hidden" }}>
      <Grid container direction="column">
        <Typography variant="h3">Todos</Typography>
        <TaskList />
      </Grid>
    </Paper>
  );
};
