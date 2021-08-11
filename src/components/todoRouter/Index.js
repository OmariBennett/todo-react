import React, { Component } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';
import Todos from './Todos';

const url = 'https://jsonplaceholder.typicode.com/todos';

export default class TodoAppRouter extends Component {
	state = {
		todos: [],
	};

	componentDidMount() {
		axios
			.get(`${url}?_limit=10`)
			.then((res) => this.setState({ todos: res.data }));
	}

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) todo.completed = !todo.completed;
				return todo;
			}),
		});
	};

	addTodo = (title) => {
		axios.post(url, { title, completed: false }).then((res) => {
			this.setState({ todos: [...this.state.todos, res.data] });
		});
	};

	removeTodo = (id) => {
		axios.delete(`${url}/${id}`).then((res) => {
			this.setState({
				todos: [...this.state.todos.filter((todo) => todo.id !== id)],
			});
		});
	};

	render() {
		return (
			<React.Fragment>
				<h2>Todolist with React router-dom...</h2>
				<AddTodo addTodo={this.addTodo} />
				<Todos
					todos={this.state.todos}
					toggleComplete={this.toggleComplete}
					removeTodo={this.removeTodo}
				/>
			</React.Fragment>
		);
	}
}
