import { useSuspenseQuery } from "@tanstack/react-query";
import { getTodos } from "./todos.api";

export const useTodoQuery = () =>
  useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
