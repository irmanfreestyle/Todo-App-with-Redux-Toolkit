import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   title: 'Cooking',
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: 'Workout',
    //   completed: false,
    // },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action) => {
      const targetIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[targetIndex].completed = !state.todos[targetIndex].completed;
    },
    removeTodo: (state, { payload: { id } }) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, completeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
