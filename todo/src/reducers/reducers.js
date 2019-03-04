import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions/actions';

const initialState = {
  todos: [
    {
      id: 'be9a374e-0e79-42d7-ae9d-17ae542205ac',
      value: 'sand the floor',
      completed: false
    },
    {
      id: '2a4add54-cbca-40ea-bb07-fa3e0b67618a',
      value: 'paint the fence',
      completed: false
    },
    {
      id: 'e12a5b08-9ab3-4aab-805f-905c811e431b',
      value: 'wax on',
      completed: false
    },
    {
      id: 'b5d28ffa-8b34-48b4-bbb6-a1085b90d04b',
      value: 'wax off',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TOGGLE_COMPLETED:
      let tempTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: tempTodos };
    case DELETE_TODO:
      tempTodos = state.todos.filter(todo => todo.id !== action.payload);
      return { todos: tempTodos };
    default:
      return state;
  }
};
