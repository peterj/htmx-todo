import Elysia from 'elysia';
import MainLayout from '../components/main-layout';

const pageRouter = new Elysia();

pageRouter.get('/', async () => {
  return (
    <MainLayout>
      <div>
        <form
          hx-boost='true'
          action='/api/todos'
          method='post'
          hx-swap='beforeend'
          hx-target='#todo-list'
        >
          <input
            class='border'
            id='todo'
            placeholder='What are you working on?'
            type='text'
            name='todo'
          />
          <button>Add Todo</button>
        </form>
      </div>
      <div>
        <h3>Your todo list</h3>
        <ul id='todo-list'></ul>
      </div>
    </MainLayout>
  );
});

export default pageRouter;
