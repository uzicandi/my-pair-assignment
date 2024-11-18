import styled from "@emotion/styled";
import { TypeTodo } from "../../apis/todos.interface";
import { CheckIcon, CloseIcon } from '../../assets/icons';
import { useState } from 'react';
import FieldCheckbox from '../ui/Field/Checkbox';
import { Text } from '../../ui/text';

interface TodoProps {
  todo: TypeTodo;
}

export default function Todo({ todo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCloseClick = () => { }

  return (
    <Container>
      <LeftContent>
        <FieldCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        <Text typography="bodySecondary" color={isChecked ? "mutedGrey" : "black"}>{todo.content}</Text>
      </LeftContent>
      <StyledCloseIcon onClick={handleCloseClick} />
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