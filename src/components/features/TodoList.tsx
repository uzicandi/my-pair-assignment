import { useMemo, useState } from "react";
import { TypeTodo } from "../../apis/todos.interface";
import styled from "@emotion/styled";
import Todo from "./Todo";

interface TodoListProps {
  todos: TypeTodo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const [tab, setTab] = useState<"ALL" | "TODO" | "DONE">("ALL");

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (tab === "ALL") return true;
        if (tab === "DONE") return todo.state === "DONE";
        if (tab === "TODO") return todo.state === "TODO";
        return true;
      }),
    [tab, todos]
  );

  return (
    <Container>
      {/* Tab 만들어서 넣으시오. */}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div``;
