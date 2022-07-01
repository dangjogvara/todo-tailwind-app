import { Todo } from '../components/model/Todo';

import { v4 as uuidv4 } from 'uuid';

type Props = {
  onNewTodo: (todo: Todo) => void;
};

const TodoForm = ({ onNewTodo }: Props) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: uuidv4(),
      text: 'Hello Worldksmcksdmnckskcskckscksnkcnskncksnckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    };

    onNewTodo(newTodo);
  };

  return (
    <form className="flex justify-between gap-3 mt-5" onSubmit={submitHandler}>
      <input
        className="basis-3/4 border-4
         border-orange-500 py-2 focus:outline-none rounded-3xl text-center font-bold text-orange-600"
        type="text"
        placeholder="Add Todo .."
      />
      <button className="basis-1/4 bg-orange-500 py-3 px-5 rounded-xl text-white font-bold shadow-lg" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
