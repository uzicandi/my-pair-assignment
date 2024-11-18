import http from "../utils/http";
import { TypeCreateTodo, TypeTodo } from "./todos.interface";

export const getTodos = async () => {
  const res = await http.get<TypeTodo[]>("api/todos");

  return res.json();
};

export const createTodo = async (data: TypeCreateTodo) => {
  const res = await http.post<TypeTodo>("api/todos", { json: data });

  return res.json();
};

export const updateTodo = async (data: TypeTodo) => {
  const res = await http.put<TypeTodo>(`api/todos/${data.id}`, { json: data });

  return res.json();
};

export const deleteTodo = async (id: number) => {
  const res = await http.delete<TypeTodo>(`api/todos/${id}`);

  return res.json();
};
