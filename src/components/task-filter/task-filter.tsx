import { Box, Tab, Tabs } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import { TaskFilterProps } from "./type";
import { TTaskFilter } from "@types";

export const TaskFilter: FC<TaskFilterProps> = ({
  filter,
  handleFilterChange,
}) => {
  const onChange = (_: SyntheticEvent, value: TTaskFilter) => {
    handleFilterChange(value);
  };

  return (
    <Box>
      <Tabs aria-label="Task Filter" value={filter} onChange={onChange}>
        <Tab label="All" value="all" />
        <Tab label="Active" value="uncompleted" />
        <Tab label="Completed" value="completed" />
      </Tabs>
    </Box>
  );
};
