import { useState } from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import { Todo } from './components/model/Todo';

const initTodos: String[] = [];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initTodos);

  const addTodo = (todo: Todo) => {
    console.log(todo);
  };

  return (
    <div className="container mx-auto py-5 w-1/2">
      <Header name="Todo List" />
      <TodoForm onNewTodo={addTodo} />
    </div>
  );
};

export default App;
