import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted, deleteTodo } from '../actions/actions';

class Todo extends React.Component {
  render() {
    return (
      <div className='todo'>
        <p className='list-number'>{this.props.listNumber}.&nbsp;</p>
        <p
          completed={this.props.todo.completed.toString()}
          onClick={() => this.props.toggleCompleted(this.props.todo.id)}
        >
          {this.props.todo.value}
        </p>
      </div>
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
  { toggleCompleted, deleteTodo }
)(Todo);
