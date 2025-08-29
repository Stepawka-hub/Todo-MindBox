import { Box, Tab, Tabs } from "@mui/material";
import { FC } from "react";

export const TaskFilter: FC = () => {
  return (
    <Box>
      <Tabs aria-label="Task Filter">
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
    </Box>
  );
};
