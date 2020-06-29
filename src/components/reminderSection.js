
import React, { Component } from 'react';
import ReminderItem from './reminderItem';
import PropTypes from 'prop-types';


class Reminders extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <ReminderItem key={todo._id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// PropTypes
Reminders.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Reminders;