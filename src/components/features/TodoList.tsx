import { useMemo, useState } from "react";
import { TypeTodo } from "../../apis/todos.interface";
import styled from "@emotion/styled";
import Todo from "./Todo";
import { Text } from '../../ui/text';

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

  const handleTabClick = (e) => {
    setTab(e.target.value);
  }

  return (
    <Container>
      <TabGroup>
        <TabItem onClick={handleTabClick} selected={tab === 'ALL'} value={'ALL'}>All</TabItem>
        <TabItem onClick={handleTabClick} selected={tab === 'TODO'} value={'TODO'}>To Do</TabItem>
        <TabItem onClick={handleTabClick} selected={tab === 'DONE'} value={'DONE'}>Done</TabItem>
      </TabGroup>
      <TotalCount typography="bodyPrimary" color="black">총 3개</TotalCount>
      <TodoItemWrapper>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id}>
            <Todo todo={todo} />
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

const TabItem = styled.button<{ selected: boolean }>`
  height: 40px;
  border-radius: 12px;
  padding: 8px 32px;
  background-color: ${({ selected }) => selected ? '#EBF4FF' : '#fff'};
  color: ${({ selected }) => selected ? '#2182F3' : '#454545'};
  align-items: center;
  display: flex;
`;

const TabGroup = styled.div`
  display: flex;
  justify-content: center;
`;