import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MAX_TASK_TEXT_LENGTH, TEST_IDS } from "@utils/constants";
import { AddTaskForm } from "./add-task-form";

describe("Проверка работы AddTaskForm", () => {
  it("Корректно вызывает onSubmit с очисткой поля ввода", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<AddTaskForm onSubmit={handleSubmit} />);

    const input = screen.getByTestId(TEST_IDS.ADDTASK_FORM.INPUT);
    const text = "Новая задача";

    await user.type(input, `${text}{enter}`);

    expect(handleSubmit).toHaveBeenCalledWith({ text });
    expect(handleSubmit).toHaveBeenCalledTimes(1);

    expect(input).toHaveValue("");
  });

  it("Проверка, что форма не вызывает onSubmit для пустой строки", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<AddTaskForm onSubmit={handleSubmit} />);

    const input = screen.getByTestId(TEST_IDS.ADDTASK_FORM.INPUT);

    await user.type(input, "{enter}");

    await user.type(input, "      ");
    await user.type(input, "{enter}");

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("Форма отправляется при макс. доступной длине", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<AddTaskForm onSubmit={handleSubmit} />);

    const input = screen.getByTestId(TEST_IDS.ADDTASK_FORM.INPUT);
    const longText = "A".repeat(MAX_TASK_TEXT_LENGTH);

    await user.type(input, `${longText}{enter}`);

    expect(handleSubmit).toHaveBeenCalledWith({ text: longText });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("");
  });

  it("Форма не отправляется при превышении макс. длины", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<AddTaskForm onSubmit={handleSubmit} />);

    const input = screen.getByTestId(TEST_IDS.ADDTASK_FORM.INPUT);
    const longText = "A".repeat(MAX_TASK_TEXT_LENGTH + 1);

    await user.type(input, `${longText}{enter}`);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(input).toHaveValue(longText);
  });
});
