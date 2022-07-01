import { Todo } from './model/Todo';
import Card from '../components/UI/Card';

type Props = {
  todo: Todo;
};

const SingleTodo = (props: Props) => {
  return (
    <div className="flex flex-row columns-3 bg-gray-200 max-w-xs h-48 mt-3 rounded-xl">
      <h1 className="">{props.todo.text}</h1>
    </div>
  );
};

export default SingleTodo;
