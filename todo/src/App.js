import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className='container'>
      <h1>To Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
