import SingleTodo from './SingleTodo';
import { Todo } from './model/Todo';

interface Props {
  todos: Todo[];
}

const TodoList = (props: Props) => {
  return (
    <div>
      <h1 className="font-bold text-center">Todos</h1>
      {props.todos.map(todo => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
