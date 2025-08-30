import { TTask } from "@types";
import { filterTaskMap } from "@utils/constants";
import { describe, it, expect } from "vitest";

describe("Фильтрация задач", () => {
  const tasks: TTask[] = [
    { id: "1", text: "Active", isCompleted: false },
    { id: "2", text: "Completed", isCompleted: true },
  ];

  it("Фильтрация всех задач", () => {
    const result = tasks.filter(filterTaskMap.all);
    expect(result).toHaveLength(2);
  });

  it("Фильтрация выполненных задач", () => {
    const result = tasks.filter(filterTaskMap.completed);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("2");
  });

  it("Фильтрация активных задач", () => {
    const result = tasks.filter(filterTaskMap.uncompleted);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });
});
