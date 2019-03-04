import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteCompleted } from '../actions/actions';

class TodoForm extends React.Component {
  state = { todo: '' };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  };

  render() {
    return (
      <form onSubmit={e => this.submitTodo(e)}>
        <input
          type='text'
          value={this.state.todo}
          name='todo'
          onChange={this.changeHandler}
          placeholder='new todo'
          required
        />
        <div className='buttons'>
          <button className='add-todo' type='submit'>
            Add Todo
          </button>
          <button
            className='delete-completed'
            type='button'
            onClick={this.props.deleteCompleted}
          >
            Delete Completed
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteCompleted }
)(TodoForm);
