export interface TypeTodo {
  id: number;
  state: "DONE" | "TODO";
  content: string;
}

export type TypeCreateTodo = Omit<TypeTodo, "id">;
