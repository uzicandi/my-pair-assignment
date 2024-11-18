import styled from "@emotion/styled";
import { TypeTodo } from "../../apis/todos.interface";
import { CloseIcon } from '../../assets/icons';
import FieldCheckbox from '../ui/Field/Checkbox';
import { Text } from '../../ui/text';
import { useDeleteTodoMutation } from '../../apis/todos.mutate';

interface TodoProps {
  todo: TypeTodo;
  onUpdate: (todo: TypeTodo) => void;
  onDelete: (todo: TypeTodo) => void;
}

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const isDone = todo.state === 'DONE';
  const textColor = isDone ? "mutedGrey" : "black";

  return (
    <Container>
      <LeftContent>
        <FieldCheckbox checked={isDone} onChange={() => onUpdate(todo)} />
        <Text typography="bodySecondary" color={textColor}>{todo.content}</Text>
      </LeftContent>
      <StyledCloseIcon onClick={onDelete} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  display: flex;
  gap: 16px;
  align-items: center; // 세로 정렬
`;

const StyledCloseIcon = styled(CloseIcon)`
  fill: #B9B9B9;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;