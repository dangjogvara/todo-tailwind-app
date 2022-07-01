import Header from './components/Header';
import Todos from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  // const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <div>
        <Header name="Todo List" />
      </div>
      <div>
        <Todos />
      </div>
      <div>
        <TodoForm />
      </div>
    </div>
  );
};

export default App;
