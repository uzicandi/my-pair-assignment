import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../features/TodoList";
import QueryProvider from "../provider/QueryProvider";
import { mockTodos } from "../../mocks/data/todos";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

describe("TodoList", () => {
  test("모든 할 일이 올바르게 렌더링되는지 확인합니다.", () => {
    render(
      <QueryProvider>
        <TodoList todos={mockTodos} />
      </QueryProvider>
    );

    expect(screen.getByText("234")).toBeInTheDocument();
    expect(screen.getByText("345")).toBeInTheDocument();
    expect(screen.getByText("sjdnf")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });
});
