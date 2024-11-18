import { TypeTodo } from '../apis/todos.interface';

let memoryTodo: TypeTodo[] = [];

export const setMemoryTodo = (todos: TypeTodo[]) => {
  memoryTodo = todos;
};

export const getMemoryTodo = () => {
  return memoryTodo;
};
