"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTodoQuery } from "../../apis/todos.query";
import TodoList from "../features/TodoList";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../apis/todos.mutate";

export default function TodoUserListPage() {
  const { data } = useTodoQuery();
  const { mutate: createMutate } = useCreateTodoMutation();
  const { mutate: updateMutate } = useUpdateTodoMutation();
  const { mutate: deleteMutate } = useDeleteTodoMutation();

  const handleClickCreate = () => {
    createMutate({ state: "TODO", content: "new todo" });
  };
  const handleClickUpdate = () => {
    updateMutate({ id: 1, state: "DONE", content: "todo update" });
  };
  const handleClickDelete = () => {
    deleteMutate(1);
  };

  return (
    <Container>
      <Heading>Todo List</Heading>
      <TodoList todos={data} />
      <button type="button" onClick={handleClickCreate}>
        todo 생성 테스트
      </button>
      <button type="button" onClick={handleClickUpdate}>
        todo 업데이트 테스트 (첫번째 todo done으로)
      </button>
      <button type="button" onClick={handleClickDelete}>
        todo 삭제 테스트 (첫번째 todo done으로)
      </button>
    </Container>
  );
}

const Heading = styled.h1``;
const Container = styled.div``;