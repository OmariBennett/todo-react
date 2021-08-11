import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todo={todo}
				toggleComplete={this.props.toggleComplete}
				removeTodo={this.props.removeTodo}
			/>
		));
	}
}

/*
	When the propTypes is required it triggered a warning message 
	!Warning: 
		Warning: Failed prop type: The prop `toogleComplete` is marked as required in `Todos`, but its value is `undefined`.
			* Todos.propTypes = {
			* 	todos: PropTypes.array.isRequired,
			* 	toogleComplete: PropTypes.func.isRequired,
			* 	removeTodo: PropTypes.func.isRequired,
			* };
*/

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toogleComplete: PropTypes.func,
	removeTodo: PropTypes.func.isRequired,
};
