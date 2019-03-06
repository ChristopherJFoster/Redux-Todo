import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { id: uuid.v4(), value: todo }
});

export const toggleCompleted = id => ({ type: TOGGLE_COMPLETED, payload: id });

export const deleteTodo = id => ({ type: DELETE_TODO, payload: id });

export const deleteCompleted = () => ({ type: DELETE_COMPLETED });
