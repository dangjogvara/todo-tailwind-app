import { Todo } from './model/Todo';

type Props = {
  todo: Todo;
};

const SingleTodo = (props: Props) => {
  return (
    <li className="list-decimal">
      <h1>{props.todo.id}</h1>
    </li>
  );
};

export default SingleTodo;
