import Elysia from 'elysia';
import MainLayout from '../components/main-layout';
import TodoInputForm from '../components/todo-input-form';

const pageRouter = new Elysia().get('/', async () => {
  return (
    <MainLayout>
      <div class='max-w-xl'>
        <TodoInputForm />
      </div>
      <div class='mt-12'>
        <h3 class='font-bold text-xl'>Your todo list</h3>
        <ul class='mt-2' id='todo-list'></ul>
      </div>
    </MainLayout>
  );
});

export default pageRouter;
