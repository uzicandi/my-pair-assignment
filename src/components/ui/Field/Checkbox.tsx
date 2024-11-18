import styled from "@emotion/styled";
import { ComponentPropsWithoutRef } from "react";

type FieldCheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type">;

export default function FieldCheckbox({ ...props }: FieldCheckboxProps) {
  return <Checkbox type="checkbox" {...props} />;
}

const Checkbox = styled.input``;
