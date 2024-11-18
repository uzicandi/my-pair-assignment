import { TypeTodo } from "../../../../apis/todos.interface";
import { memoryTodo } from "../../../../server/memory-todo";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const targetId = Number(params.id);
  const data = await req.json();

  const index = memoryTodo.findIndex((todo) => todo.id === targetId);

  if (index < 0) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  }

  memoryTodo[index] = { ...data };

  return Response.json(memoryTodo[index]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const targetId = Number(params.id);
  const index = memoryTodo.findIndex((todo) => todo.id === targetId);
  const target = memoryTodo[index];

  if (index < 0) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  }

  memoryTodo.splice(index, 1);

  return Response.json(target);
}
