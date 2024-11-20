import "@testing-library/jest-dom";
import TodoForm from "../features/TodoForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matchers } from "@emotion/jest";
import QueryProvider from '../provider/QueryProvider';
import TodoList from '../features/TodoList';
import remote from '../../mocks/barrel';
expect.extend(matchers);

describe("TodoForm", () => {
  test("새로운 리스트가 추가되는지 확인합니다.", async () => {
    const createSpy = jest.spyOn(remote, 'createTodo').mockImplementation(() => Promise.resolve({
      id: 2,
      state: "TODO",
      content: "새로운 할 일"
    }));
    userEvent.setup();

    const mockTodos = [{ id: 1, state: "TODO" as any, content: "기존 할 일" }];

    render(
      <QueryProvider>
        <TodoForm todos={mockTodos} />
        <TodoList todos={mockTodos} />
      </QueryProvider>
    );

    await userEvent.type(screen.getByRole("textbox"), "새로운 할 일");
    await userEvent.keyboard("[Enter]");

    render(
      <QueryProvider>
        <TodoForm todos={mockTodos} />
        <TodoList todos={mockTodos} />
      </QueryProvider>
    );

    await waitFor(() => {
      const todoItems = screen.getAllByRole('listitem');
      expect(todoItems).toHaveLength(2); // 기존 1개 + 새로운 할 일 1개
    });

    await createSpy.mockClear();
  });

  test("입력값이 20자까지만 제한되는지 테스트합니다.", async () => {
    const user = userEvent.setup();
    const mockTodos = [{ id: 1, state: "TODO" as any, content: "기존 할 일" }];

    render(<QueryProvider><TodoForm todos={mockTodos} /></QueryProvider>);

    const input = screen.getByRole("textbox");

    // 25자 입력 시도
    await user.type(input, "1234567890123456789012345");

    // 입력값이 20자로 잘린 상태인지 확인
    expect(input).toHaveValue("12345678901234567890");
  });

  test("완료되지 않은 할 일이 10개 이상일 때 알림 메시지를 표시하는지 테스트합니다.", async () => {
    jest.spyOn(window, 'alert').mockImplementation();

    const mockTodos = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      state: 'TODO' as any,
      content: `할 일 ${i + 1}`,
    }));

    render(<QueryProvider><TodoForm todos={mockTodos} /></QueryProvider>);

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');

    // 새로운 할 일 추가 시도
    await user.type(input, '새로운 할 일');
    await user.keyboard('[Enter]');

    // 경고 메시지 확인
    expect(window.alert).toHaveBeenCalledWith('아직 완료되지 않은 할 일이 10개 이상이에요!');
  });
});
