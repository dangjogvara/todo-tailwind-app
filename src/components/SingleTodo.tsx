import { Todo } from './model/Todo';

type Props = {
  todo: Todo;
};

const SingleTodo = (props: Props) => {
  return <p>{props.todo.text}</p>;
};

export default SingleTodo;
