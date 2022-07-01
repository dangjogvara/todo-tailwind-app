import { Todo } from './model/Todo';

type Props = {
  todo: Todo;
};

const SingleTodo = (props: Props) => {
  return (
    <div className="flex flex-row columns-3 bg-gray-200 max-w-xs h-48 mt-3 rounded-xl">
      <p className="">{props.todo.text}</p>
    </div>
  );
};

export default SingleTodo;
