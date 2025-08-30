import { describe, it, expect } from "vitest";
import { nanoid } from "nanoid";
import { TTask } from "@types";

describe("Обработчики задач", () => {
  it("Добавление новой задачи", () => {
    const initialTasks: TTask[] = [];
    const newTask = { id: nanoid(), text: "New task", isCompleted: false };

    const updatedTasks = [...initialTasks, newTask];

    expect(updatedTasks).toHaveLength(1);
    expect(updatedTasks[0].text).toBe("New task");
    expect(updatedTasks[0].isCompleted).toBe(false);
  });

  it("Изменение статуса выполнения задачи", () => {
    const tasks: TTask[] = [{ id: "1", text: "Task 1", isCompleted: false }];

    const updatedTasks = tasks.map((task) =>
      task.id === "1" ? { ...task, isCompleted: true } : task
    );

    expect(updatedTasks[0].isCompleted).toBe(true);
  });

  it("Изменение несуществующей задачи", () => {
    const tasks: TTask[] = [{ id: "1", text: "Task 1", isCompleted: false }];

    const updatedTasks = tasks.map((task) =>
      task.id === "test" ? { ...task, isCompleted: true } : task
    );

    expect(updatedTasks[0].isCompleted).toBe(false);
  });
});
