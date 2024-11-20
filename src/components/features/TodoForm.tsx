'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import { useCreateTodoMutation } from '../../apis/todos.mutate';
import { TypeTodo } from '../../apis/todos.interface';

interface TodoFormProps {
  todos: TypeTodo[];
}


export default function TodoForm({ todos }: TodoFormProps) {
  const { mutate: createMutate } = useCreateTodoMutation();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const remainingTodos = todos.filter(todo => todo.state === 'TODO');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (remainingTodos.length >= 10) {
      alert('아직 완료되지 않은 할 일이 10개 이상이에요!');
      return;
    }
    createMutate({ state: "TODO", content: value });
    setValue("");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchInput type="text" value={value} onChange={handleChange} placeholder='할 일을 입력해 주세요' maxLength={20} />
      </form>
    </Container>
  )
}

const Container = styled.div`
  background-color: #e5e5e5;
  border-radius: 24px;
  width: 100%;
`;

const SearchForm = styled.form`
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 32px;
`