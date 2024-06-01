import Elysia from 'elysia';
import DeleteIcon from '../components/delete-icon';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TODOS: Todo[] = [
  { id: 1, text: 'Todo 1', completed: true },
  { id: 2, text: 'Todo 2', completed: false },
  { id: 3, text: 'Todo 3', completed: false },
];

const apiRouter = new Elysia();

function SingleTodo(props: { todo: Todo }) {
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

apiRouter.group('/api', (app) =>
  app
    .get('/todos', () => {
      return (
        <ul>
          {TODOS.map((todo) => (
            <SingleTodo todo={todo} />
          ))}
        </ul>
      );
    })
    .post('/todos', (req) => {
      const newTodo = {
        id: TODOS.length + 1,
        text: req.body.todo,
        completed: false,
      };

      // Persist the todo to the database
      TODOS.push(newTodo);

      return <SingleTodo todo={newTodo} />;
    })
    .delete('/todos/:id', ({ params, redirect }) => {
      console.log('params', params);
      const id = parseInt(params.id, 10);
      const index = TODOS.findIndex((todo) => todo.id === id);

      if (index === -1) {
        // TODO: redirect to error page
        return <div>Todo not found</div>;
      }

      // Remove the todo from the database
      TODOS.splice(index, 1);

      // TODO: IT doesn't refresh the page automatically
      return redirect('/');
    })
);

export default apiRouter;
