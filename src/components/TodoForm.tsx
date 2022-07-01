const TodoForm = () => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={submitHandler}>
      <input className={newFunction()} type="text" placeholder="Add Todo .." />
      <button className="bg-orange-500 py-3 px-5 rounded-xl text-white font-bold shadow-lg" type="submit">
        Add Todo
      </button>
    </form>
  );

  function newFunction(): string | undefined {
    return 'focus:outline-none border-4 border-orange-500 mr-3 py-2 shadow-lg';
  }
};

export default TodoForm;
