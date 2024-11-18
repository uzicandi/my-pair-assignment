import styled from "@emotion/styled";
import { ComponentPropsWithoutRef } from "react";

type FieldCheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type">;

export default function FieldCheckbox({ ...props }: FieldCheckboxProps) {
  return <Input type="text" {...props} />;
}

const Input = styled.input``;
