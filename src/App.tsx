import { useState } from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import { Todo } from './components/model/Todo';
import TodoList from './components/TodoList';

const initTodos: Todo[] = [];

const App = () => {
  const [todos, setTodos] = useState(initTodos);

  const addTodo = (todo: Todo) => {
    setTodos(prevTodos => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <div className="container mx-auto py-5 w-1/2">
      <Header name="Todo List" />
      <TodoForm onNewTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
