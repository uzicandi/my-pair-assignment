import styled from '@emotion/styled';
import { useState } from 'react';
import { useCreateTodoMutation } from '../../apis/todos.mutate';

export default function TodoForm() {
  const { mutate: createMutate } = useCreateTodoMutation();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    createMutate({ state: "TODO", content: value });
    setValue("");
  }

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput type="text" value={value} onChange={handleChange} placeholder='할 일을 입력해 주세요' />
      </SearchForm>
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