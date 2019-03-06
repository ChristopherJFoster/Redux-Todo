import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <Todo listNumber={index + 1} todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  null
)(TodoList);
