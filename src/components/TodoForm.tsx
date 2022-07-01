import React, { useState } from 'react';

import { Todo } from '../components/model/Todo';

import { v4 as uuidv4 } from 'uuid';

type Props = {
  onNewTodo: (todo: Todo) => void;
};

const TodoForm = ({ onNewTodo }: Props) => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: uuidv4(),
      text: enteredText,
    };

    onNewTodo(newTodo);
    setEnteredText('');
  };

  return (
    <form className="flex justify-between gap-3 mt-5" onSubmit={submitHandler}>
      <input
        className="basis-3/4 border-4
         border-orange-500 py-2 focus:outline-none rounded-3xl text-center font-bold text-orange-600"
        type="text"
        maxLength={40}
        value={enteredText}
        onChange={textChangeHandler}
        placeholder="Add Todo .."
      />
      <button className="basis-1/4 bg-orange-500 py-3 px-5 rounded-xl text-white font-bold shadow-lg" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
