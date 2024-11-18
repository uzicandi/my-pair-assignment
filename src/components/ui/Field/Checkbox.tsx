import styled from "@emotion/styled";
import { ComponentPropsWithoutRef } from "react";
import { CheckIcon } from '../../../assets/icons';

type FieldCheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type">;

export default function FieldCheckbox({ ...props }: FieldCheckboxProps) {
  return (
    <CheckboxContainer>
      <Checkbox type="checkbox" {...props} />
      <CheckIcon />
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer; 
  position: relative;
`;


const Checkbox = styled.input`
  appearance: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  position: relative; 
  + svg {
    display: none;
  }

  &:checked {
    background-color: #2182F3;
    border: none;

    & + svg {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      fill: #fff;
    }
  }
`;


// const StyledCheckIcon = styled(CheckIcon)`
//   display: none;

//   ${Checkbox}:checked + & {
//     display: block;
//   }
// `;