"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTodoQuery } from "../../apis/todos.query";
import TodoList from "../features/TodoList";
import { Text } from '../ui/Text';
import TodoForm from '../features/TodoForm';

export default function TodoUserListPage() {
  const { data } = useTodoQuery();

  return (
    <Container>
      <Text typography="headline" color="darkGrey">Todo List</Text>
      <TodoForm todos={data} />
      <TodoList todos={data} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 128px calc((100% - 737px) / 2);
`;