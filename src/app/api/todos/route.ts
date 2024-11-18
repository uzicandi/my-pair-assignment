import { memoryTodo } from "../../../server/memory-todo";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  return Response.json(memoryTodo);
}

export async function POST(req: Request) {
  const data = await req.json();
  const id = new Date().getTime();
  const target = { id, ...data };

  memoryTodo.push(target);

  await sleep(1000);

  return Response.json(target);
}
