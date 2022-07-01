import { Todo } from './model/Todo';

type Props = {
  todo: Todo;
};

const SingleTodo = (props: Props) => {
  return (
    <div className="flex bg-gray-200 w-1/2 h-48 mt-3 rounded-xl columns-2xs ">
      <p className="break-words px-3 py-3">{props.todo.text}</p>
    </div>
  );
};

export default SingleTodo;
