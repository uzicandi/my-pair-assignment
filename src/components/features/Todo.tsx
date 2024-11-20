import styled from "@emotion/styled";
import { TypeTodo } from "../../apis/todos.interface";
import { CloseIcon } from "../../assets/icons";
import FieldCheckbox from "../ui/Field/Checkbox";
import { Text } from "../ui/Text";

interface TodoProps {
  todo: TypeTodo;
  onUpdate: (todo: TypeTodo) => void;
  onDelete: (todo: TypeTodo) => void;
}

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const isDone = todo.state === "DONE";
  const textColor = isDone ? "mutedGrey" : "black";

  return (
    <Container>
      <LeftContent>
        <FieldCheckbox checked={isDone} onChange={() => onUpdate(todo)} />
        <Text typography="bodySecondary" color={textColor}>
          {todo.content}
        </Text>
      </LeftContent>
      <StyledCloseIconButton onClick={() => onDelete(todo)} aria-label="delete">
        <StyledCloseIcon />
      </StyledCloseIconButton>
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
  align-items: center;
`;

const StyledCloseIconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  fill: #b9b9b9;
  width: 14px;
  height: 14px;
`;
