import React, { Component } from 'react';
import Todos from './components/todo/Todos';

export default class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: false,
			},
			{
				id: 2,
				title: 'Dinner with wife',
				completed: false,
			},
			{
				id: 3,
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

	render() {
		return (
			<div>
				<Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
			</div>
		);
	}
}
