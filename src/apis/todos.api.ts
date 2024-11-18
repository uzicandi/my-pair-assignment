import http from '../utils/http';
import { TypeCreateTodo, TypeTodo } from './todos.interface';

export const getTodos = async () => {
  const res = await http.get<TypeTodo[]>('todos');

  return res.json();
};

export const createTodo = async (data: TypeCreateTodo) => {
  const res = await http.post<TypeTodo>('todos', {
    json: {
      id: new Date().getTime(),
      ...data,
    },
  });
  return res.json();
};

export const updateTodo = async (data: TypeTodo) => {
  const res = await http.put<TypeTodo>(`todos/${data.id}`, { json: data });

  return res.json();
};

export const deleteTodo = async (id: number) => {
  const res = await http.delete<TypeTodo>(`todos/${id}`);

  return res.json();
};
