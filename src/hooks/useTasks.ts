import { useCallback, useState } from "react";
import { TTask, TTaskUpdateHandler } from "@types";
import { nanoid } from "nanoid";
import { SubmitHandler } from "react-hook-form";
import { TAddTaskForm } from "@components";

export const useTasks = (initialTasks: TTask[] = []) => {
  const [tasks, setTasks] = useState<TTask[]>(initialTasks);
  const [isTaskListExpanded, setIsTaskListExpanded] = useState(true);

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
    setIsTaskListExpanded(true);
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((p) => p.filter((t) => !t.isCompleted));
  }, []);

  const toggleTaskList = useCallback(() => {
    setIsTaskListExpanded((p) => !p);
  }, []);

  return {
    tasks,
    isTaskListExpanded,
    handleAddTask,
    handleTaskUpdate,
    toggleTaskList,
    clearCompleted,
  };
};
