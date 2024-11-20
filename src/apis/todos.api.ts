import http from "../utils/http";
import { TypeCreateTodo, TypeTodo } from "./todos.interface";

export const getTodos = async () => {
  const { data } = await http.get<TypeTodo[]>("todos");

  return data;
};

export const createTodo = async (form: TypeCreateTodo) => {
  const { data } = await http.post<TypeTodo>("todos", {
    json: {
      id: new Date().getTime(),
      ...form,
    },
  });
  return data;
};

export const updateTodo = async (form: TypeTodo) => {
  const { data } = await http.put<TypeTodo>(`todos/${form.id}`, { json: form });

  return data;
};

export const deleteTodo = async (id: number) => {
  const { data } = await http.delete<TypeTodo>(`todos/${id}`);

  return data;
};
