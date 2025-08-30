import { Tabs } from "@mui/material";
import { TTaskFilter } from "@types";
import { FC, memo, SyntheticEvent } from "react";
import { TaskFilterProps } from "./type";
import { Tab } from "@ui";
import { TEST_IDS } from "@utils/constants";

export const TaskFilter: FC<TaskFilterProps> = memo(
  ({ filter, handleFilterChange }) => {
    const onChange = (_: SyntheticEvent, value: TTaskFilter) => {
      handleFilterChange(value);
    };

    return (
      <Tabs aria-label="Task Filter" value={filter} onChange={onChange}>
        <Tab
          data-testid={TEST_IDS.TASK_FILTER_TABS.ALL}
          label="All"
          value="all"
        />
        <Tab
          data-testid={TEST_IDS.TASK_FILTER_TABS.ACTIVE}
          label="Active"
          value="active"
        />
        <Tab
          data-testid={TEST_IDS.TASK_FILTER_TABS.COMPLETED}
          label="Completed"
          value="completed"
        />
      </Tabs>
    );
  }
);
