import { useSelector } from 'react-redux';

export default function Nav() {
  const completeTodos = useSelector(
    (state) => state.todo.todos.filter((todo) => todo.completed).length
  );
  const unCompletedTodos = useSelector(
    (state) => state.todo.todos.filter((todo) => !todo.completed).length
  );

  return (
    <div className="nav">
      <div>Completed: {completeTodos}</div>
      <div align="right">Todo: {unCompletedTodos}</div>
    </div>
  );
}
