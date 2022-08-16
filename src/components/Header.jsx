import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

export default function Header() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const addTodoAction = (e) => {
    if (e.keyCode === 13 && newTodo.trim().length) {
      const payload = {
        id: Math.random().toString(36).substring(2, 7),
        title: newTodo,
        completed: false,
      };
      dispatch(addTodo(payload));
      setNewTodo('');
    }
  };

  return (
    <div className="header">
      <h4 align="center">Todo App with Redux</h4>
      <input
        type="text"
        className="input-todo"
        placeholder="Add your task here..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={addTodoAction}
      />
    </div>
  );
}
