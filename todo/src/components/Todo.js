import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted, deleteTodo } from '../actions/actions';

const Todo = ({ todo, listNumber, toggleCompleted, deleteTodo }) => {
  return (
    <div className='todo'>
      <p className='list-number'>{listNumber}.&nbsp;</p>
      <p
        completed={todo.completed.toString()}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo.value}
      </p>
      <p
        className='delete-todo'
        completed={todo.completed.toString()}
        onClick={() => deleteTodo(todo.id)}
      >
        &nbsp;X
      </p>
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
  { toggleCompleted, deleteTodo }
)(Todo);
