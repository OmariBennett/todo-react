import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import AddTodo from './AddTodo';
import Todos from './Todos';

export default class TodoApp extends Component {
	state = {
		todos: [
			{
				id: uuid(),
				title: 'Take out the trash',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Dinner with wife',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Meeting with boss',
				completed: false,
			},
		],
	};

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) todo.completed = !todo.completed;
				return todo;
			}),
		});
	};

	addTodo = (title) => {
		const newTodo = {
			id: uuid(),
			title,
			completed: false,
		};

		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	removeTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	render() {
		return (
			<div>
				<React.Fragment>
					<AddTodo addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						toggleComplete={this.toggleComplete}
						removeTodo={this.removeTodo}
					/>
				</React.Fragment>
			</div>
		);
	}
}
