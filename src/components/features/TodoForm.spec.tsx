import "@testing-library/jest-dom";
import { useCreateTodoMutation } from "../../apis/todos.mutate";
import TodoForm from "../features/TodoForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

jest.mock("../../apis/todos.mutate");
describe("TodoForm", () => {
  test("새로운 투두 추가 테스트", async () => {
    const user = userEvent.setup();
    const mockMutate = jest.fn();
    (useCreateTodoMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });

    const mockTodos = [{ id: 1, state: "TODO" as any, content: "기존 할 일" }];

    render(<TodoForm todos={mockTodos} />);

    // 입력 필드에 값 입력
    await user.type(screen.getByRole("textbox"), "새로운 할 일");

    // Enter 키 입력으로 form 제출
    await user.keyboard("[Enter]");

    // mutate 함수가 호출되었는지 확인
    expect(mockMutate).toHaveBeenCalledWith({
      state: "TODO",
      content: "새로운 할 일",
    });

    // 입력 필드가 초기화되었는지 확인
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test("입력값이 20자까지만 제한되는지 테스트", async () => {
    const user = userEvent.setup();
    const mockTodos = [{ id: 1, state: "TODO" as any, content: "기존 할 일" }];

    render(<TodoForm todos={mockTodos} />);

    const input = screen.getByRole("textbox");

    // 25자 입력 시도
    await user.type(input, "1234567890123456789012345");

    // 입력값이 20자로 잘린 상태인지 확인
    expect(input).toHaveValue("12345678901234567890");
  });

  test("완료되지 않은 할 일이 10개 이상일 때 알림 메시지를 표시하는지 테스트", async () => {
    const user = userEvent.setup();

    // alert를 mock 처리
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    const mockTodos = Array.from({ length: 10 }, (_, index) => ({
      id: 1,
      state: "TODO" as any,
      content: `할 일 ${index + 1}`,
    }));

    render(<TodoForm todos={mockTodos} />);

    // 입력 필드에 값 입력
    await user.type(screen.getByRole("textbox"), "새로운 할 일");

    // Enter 키 입력으로 form 제출
    await user.keyboard("[Enter]");

    // alert 호출 여부 확인
    expect(alertMock).toHaveBeenCalledWith(
      "아직 완료되지 않은 할 일이 10개 이상이에요!"
    );

    // alert mock 복원
    alertMock.mockRestore();
  });
});
