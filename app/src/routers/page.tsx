import Elysia from 'elysia';
import MainLayout from '../components/main-layout';

const pageRouter = new Elysia();

pageRouter.get('/', async () => {
  return (
    <MainLayout>
      <div>
        <button hx-get='/api/todos' hx-target='#todo-list'>
          Show Todos
        </button>
      </div>
      <div id='todo-list'></div>
    </MainLayout>
  );
});

export default pageRouter;
