import { Tabs } from "@mui/material";
import { TTaskFilter } from "@types";
import { FC, SyntheticEvent } from "react";
import { TaskFilterProps } from "./type";
import { Tab } from '@ui';

export const TaskFilter: FC<TaskFilterProps> = ({
  filter,
  handleFilterChange,
}) => {
  const onChange = (_: SyntheticEvent, value: TTaskFilter) => {
    handleFilterChange(value);
  };

  return (
    <Tabs aria-label="Task Filter" value={filter} onChange={onChange}>
      <Tab label="All" value="all" />
      <Tab label="Active" value="uncompleted" />
      <Tab label="Completed" value="completed" />
    </Tabs>
  );
};
