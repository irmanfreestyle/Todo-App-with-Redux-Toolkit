import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, removeTodo } from '../features/todoSlice';

export default function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const sortedTodos = [...todos].sort(
    (todo1, todo2) => todo2.completed - todo1.completed
  );

  const removeTodoAction = (e, id) => {
    e.stopPropagation();
    dispatch(removeTodo({ id }));
  };
  const completeTodoAction = (payload) => {
    dispatch(completeTodo(payload));
  };

  return (
    <div className="list">
      {!sortedTodos.length && <div align="center">Let's add some todo</div>}
      {sortedTodos.map((todo) => (
        <div
          className="list-item"
          key={todo.id}
          onClick={() => completeTodoAction(todo.id)}
        >
          <div>
            <span style={{ opacity: todo.completed ? '1' : '0' }}>
              &#10003;
            </span>
            &emsp;
            <span className={`${todo.completed && 'completed'}`}>
              {todo.title}
            </span>
          </div>
          <span
            className="remove-btn"
            onClick={(e) => removeTodoAction(e, todo.id)}
          >
            &#x2715;
          </span>
        </div>
      ))}
    </div>
  );
}
