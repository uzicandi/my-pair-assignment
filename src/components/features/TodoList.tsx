'use client';

import { useMemo, useState } from "react";
import { TypeTodo } from "../../apis/todos.interface";
import styled from "@emotion/styled";
import Todo from "./Todo";
import { Text } from '../ui/Text';
import TabGroup, { TabType } from '../ui/Tab';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../apis/todos.mutate';

interface TodoListProps {
  todos: TypeTodo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const [tab, setTab] = useState<TabType>("ALL");

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTab(e.currentTarget.value as TabType);
  }

  const { mutate: updateMutate } = useUpdateTodoMutation();
  const { mutate: deleteMutate } = useDeleteTodoMutation();

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

  const handleUpdateClick = (todo: TypeTodo) => {
    const { id, state, content } = todo;
    updateMutate({ id, state: state === 'DONE' ? 'TODO' : 'DONE', content });
  };

  const handleCloseClick = (todo: TypeTodo) => {
    deleteMutate(todo.id);
  }

  return (
    <Container>
      <TabGroup onClick={handleTabClick} tab={tab} />
      <TotalCount typography="bodyPrimary" color="black">총 {todos.length}개</TotalCount>
      <TodoItemWrapper>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id}>
            <Todo todo={todo} onUpdate={() => handleUpdateClick(todo)} onDelete={() => handleCloseClick(todo)} />
          </TodoItem>
        ))}
      </TodoItemWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.12);
  padding: 32px;
`;

const TotalCount = styled(Text)`
  padding: 16px;
`;

const TodoItemWrapper = styled.ul`
  padding: 0;
  margin: 0
`

const TodoItem = styled.li`
  list-style: none;
  padding: 32px 16px;
`;

