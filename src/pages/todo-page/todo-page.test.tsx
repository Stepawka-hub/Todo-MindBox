import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TEST_IDS } from "@utils/constants";
import * as mockUtils from "@utils/mock";
import { TodoPage } from "@pages";

const TASK_ACTIVE = { id: "1", text: "Первая задача", isCompleted: false };
const TASK_COMPLETED = { id: "2", text: "Вторая задача", isCompleted: true };
const TEXT_NEW_TASK = "New Task";

// Мокаем данные, которые получаем в useEffect (пусть и тестовые)
vi.spyOn(mockUtils, "mockTasks", "get").mockReturnValue([
  TASK_ACTIVE,
  TASK_COMPLETED,
]);

vi.mock("nanoid", () => ({
  nanoid: () => "test-id-123",
}));

const setup = () => {
  const user = userEvent.setup();
  render(<TodoPage />);
  return { user };
};

const waitForInitialData = async () => {
  await screen.findByText(TASK_ACTIVE.text);
};

describe("Корректный рендер и работа TodoPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Корректная загрузка начальных данных", async () => {
    render(<TodoPage />);
    await waitForInitialData();

    expect(screen.getByText(TASK_ACTIVE.text)).toBeInTheDocument();
    expect(screen.getByText(TASK_COMPLETED.text)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.ITEMS_LEFT_COUNT)).toHaveTextContent(
      "1 item left"
    );
  });

  it("Корректное добавление новой задачи", async () => {
    const { user } = setup();

    const input = screen.getByTestId(TEST_IDS.ADDTASK_FORM.INPUT);
    await user.type(input, `${TEXT_NEW_TASK}{enter}`);

    const newTask = await screen.findByText(TEXT_NEW_TASK);
    expect(newTask).toBeInTheDocument();
    expect(newTask).not.toHaveStyle("text-decoration: line-through");
  });

  it("Корректное переключение статуса задачи", async () => {
    const { user } = setup();
    await waitForInitialData();

    const toggleButtons = screen.getAllByTestId(TEST_IDS.TASK_ITEM.TOGGLE);
    await user.click(toggleButtons[0]);

    const task = await screen.findByText("Первая задача");
    expect(task).toHaveStyle("text-decoration: line-through");
    expect(screen.getByTestId(TEST_IDS.ITEMS_LEFT_COUNT)).toHaveTextContent(
      "0 items left"
    );
  });
});

describe("Фильтрация и очистка задач", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Фильтрация выполненных задач", async () => {
    const { user } = setup();
    await waitForInitialData();

    await user.click(screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.COMPLETED));

    expect(screen.getByText(TASK_COMPLETED.text)).toBeInTheDocument();
    expect(screen.queryByText(TASK_ACTIVE.text)).not.toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.ITEMS_LEFT_COUNT)).toHaveTextContent(
      "0 items left"
    );
  });

  it("Фильтрация активных задач", async () => {
    const { user } = setup();
    await waitForInitialData();

    await user.click(screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.ACTIVE));

    expect(screen.getByText(TASK_ACTIVE.text)).toBeInTheDocument();
    expect(screen.queryByText(TASK_COMPLETED.text)).not.toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.ITEMS_LEFT_COUNT)).toHaveTextContent(
      "1 item left"
    );
  });

  it("Отображение всех задач", async () => {
    const { user } = setup();
    await waitForInitialData();

    await user.click(screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.COMPLETED));
    await user.click(screen.getByTestId(TEST_IDS.TASK_FILTER_TABS.ALL));

    expect(screen.getByText(TASK_ACTIVE.text)).toBeInTheDocument();
    expect(screen.getByText(TASK_COMPLETED.text)).toBeInTheDocument();
  });

  it("Очистка выполненных задач", async () => {
    const { user } = setup();
    await waitForInitialData();

    const clearButton = screen.getByTestId(TEST_IDS.CLEAR_BTN);
    await user.click(clearButton);

    expect(screen.queryByText(TASK_COMPLETED.text)).not.toBeInTheDocument();
    expect(screen.getByText(TASK_ACTIVE.text)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.ITEMS_LEFT_COUNT)).toHaveTextContent(
      "1 item left"
    );
    expect(clearButton).toBeDisabled();
  });
});
