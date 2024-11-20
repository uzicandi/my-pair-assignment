import "@testing-library/jest-dom";
import { mockTodos } from "../../mocks/data/todos";
import Todo from "./Todo";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matchers } from "@emotion/jest";

expect.extend(matchers);
const mockOnUpdate = jest.fn();
const mockOnDelete = jest.fn();

describe("TodoForm", () => {

  test("삭제 테스트", async () => {
    const user = userEvent.setup();

    const { rerender } = render(
      <Todo todo={mockTodos[0]} onUpdate={mockOnUpdate} onDelete={() => {
        const index = mockTodos.indexOf(mockTodos[0]);
        if (index > -1) {
          mockTodos.splice(index, 1);
        }
      }} />
    );

    // 삭제 아이콘 클릭
    await user.click(screen.getByTestId("delete-icon"));

    // 리스트에 투두가 없는지 확인
    rerender(<Todo todo={mockTodos[0]} onUpdate={mockOnUpdate} onDelete={mockOnDelete} />);
    expect(screen.queryByText("Test Todo")).toBeNull();
  });
});
