import { Elysia, t } from 'elysia';
import type { Todo } from '../components/single-todo';
import SingleTodo from '../components/single-todo';

const TODOS: Todo[] = [
  { id: 1, text: 'Todo 1', completed: true },
  { id: 2, text: 'Todo 2', completed: false },
  { id: 3, text: 'Todo 3', completed: false },
];

const apiRouter = new Elysia().group('/api', (app) =>
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
    .post(
      '/todos',
      (req) => {
        const newTodo = {
          id: TODOS.length + 1,
          text: req.body.todo,
          completed: false,
        };

        // Persist the todo to the database
        TODOS.push(newTodo);

        return <SingleTodo todo={newTodo} />;
      },
      {
        body: t.Object({ todo: t.String() }),
      }
    )
    .delete(
      '/todos/:id',
      ({ params, redirect }) => {
        const { id } = params;
        const index = TODOS.findIndex((todo) => todo.id === id);

        if (index === -1) {
          // TODO: redirect to error page
          return <div>Todo not found</div>;
        }

        // Remove the todo from the database
        TODOS.splice(index, 1);

        // TODO: IT doesn't refresh the page automatically
        return redirect('/');
      },
      {
        params: t.Object({ id: t.Numeric() }),
      }
    )
);

export default apiRouter;
