import Elysia from 'elysia';

const apiRouter = new Elysia();

apiRouter.group('/api', (app) =>
  app.get('/todos', () => {
    return (
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>

        <li>Todo 3</li>
        <li>Todo 4</li>
      </ul>
    );
  })
);

export default apiRouter;
