export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function SingleTodo(props: { todo: Todo }) {
  return (
    <li class='flex space-x-2' id={props.todo.id}>
      <div>{props.todo.text}</div>
      <div>Completed: {props.todo.completed ? 'Yes' : 'No'}</div>
      <button
        hx-delete={`/api/todos/${props.todo.id}`}
        class='text-red-500 font-bold'
      >
        X
      </button>
    </li>
  );
}
