import styled from "@emotion/styled";
import { TypeTodo } from "../../apis/todos.interface";

interface TodoProps {
  todo: TypeTodo;
}

export default function Todo({ todo }: TodoProps) {
  return (
    <Container>
      {/* FieldCheckBox 만들어서 넣으시오 */}
      {todo.content}
      {/* Close Icon 만들어서 넣으시오 */}
    </Container>
  );
}

const Container = styled.div``;
