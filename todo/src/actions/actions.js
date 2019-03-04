import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid.v4(),
      value: todo,
      completed: false
    }
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
