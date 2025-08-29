import { FC, useEffect, useState } from "react";
import { TTask } from "@types";
import { mockTasks } from "@utils/mock";
import { TaskItem } from "@components";
import { Box } from "@mui/material";

export const TaskList: FC = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  if (!tasks.length) {
    return <Box>Список задач пуст</Box>;
  }

  const taskElements = tasks.map((t) => <TaskItem key={t.id} {...t} />);

  return <Box>{taskElements}</Box>;
};
