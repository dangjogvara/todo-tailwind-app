import SingleTodo from './SingleTodo';
import { Todo } from './model/Todo';

interface Props {
  todos: Todo[];
}

const TodoList = (props: Props) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
