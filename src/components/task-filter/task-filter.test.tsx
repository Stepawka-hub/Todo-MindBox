import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TEST_IDS } from "@utils/constants";
import { TaskFilter } from "./task-filter";

describe("Проверка работы фильтра", () => {
  it("Корректно отображает выбранный фильтр", () => {
    const handleFilterChange = vi.fn();

    render(
      <TaskFilter filter="active" handleFilterChange={handleFilterChange} />
    );

    const activeTab = screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.ACTIVE);
    expect(activeTab).toHaveAttribute("aria-selected", "true");

    const allTab = screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.ALL);
    const completedTab = screen.getByTestId(
      TEST_IDS.TASK_FILTER_TABS.COMPLETED
    );
    expect(allTab).toHaveAttribute("aria-selected", "false");
    expect(completedTab).toHaveAttribute("aria-selected", "false");
  });

  it("Правильный вызов обработчика при клике на вкладку", async () => {
    const user = userEvent.setup();
    const handleFilterChange = vi.fn();

    render(<TaskFilter filter="all" handleFilterChange={handleFilterChange} />);

    const completedTab = screen.getByTestId(
      TEST_IDS.TASK_FILTER_TABS.COMPLETED
    );
    await user.click(completedTab);

    expect(handleFilterChange).toHaveBeenCalledWith("completed");
    expect(handleFilterChange).toHaveBeenCalledTimes(1);
  });

  it("Корректно рендерится с разными значениями", () => {
    const handleFilterChange = vi.fn();

    const { rerender } = render(
      <TaskFilter filter="all" handleFilterChange={handleFilterChange} />
    );
    expect(screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.ALL)).toHaveAttribute(
      "aria-selected",
      "true"
    );

    rerender(
      <TaskFilter filter="completed" handleFilterChange={handleFilterChange} />
    );
    expect(
      screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.COMPLETED)
    ).toHaveAttribute("aria-selected", "true");
  });
});
