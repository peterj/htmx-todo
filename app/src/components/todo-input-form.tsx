export default function TodoInputForm() {
  return (
    <form
      hx-boost='true'
      action='/api/todos'
      method='post'
      hx-swap='beforeend'
      hx-target='#todo-list'
      class='flex flex-col'
    >
      <div class='rounded-md p-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-pink-200'>
        <label for='todo' class='block text-xs font-medium text-gray-900'>
          Task name
        </label>
        <input
          type='text'
          name='todo'
          id='todo'
          class='block w-full border-0 py-2 px-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
          placeholder='what are you planning to do?'
        />
      </div>
      <button class='self-end mt-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
        Create task
      </button>
    </form>
  );
}
