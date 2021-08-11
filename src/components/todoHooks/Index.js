import React, { useState } from 'react';

function Todo({ index, todo, completeTodo, removeTodo }) {
	return (
		<div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
			<input type='checkbox' onClick={() => completeTodo(index)} />
			{todo.text}
			<button onClick={() => removeTodo(index)}>Delete</button>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Add todo:{' '}
				<input
					type='text'
					value={value}
					placeholder='Add todo...'
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
		</form>
	);
}

export default function TodoAppHooks() {
	const [todos, setTodos] = useState([
		{
			text: 'Learn about React',
			isCompleted: false,
		},
		{
			text: 'Meet friend for lunch',
			isCompleted: false,
		},
		{
			text: 'Build really cool todo app',
			isCompleted: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div>
			<h2>Todolist with React hooks...</h2>
			{todos.map((todo, index) => (
				<Todo
					key={index}
					index={index}
					todo={todo}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<TodoForm addTodo={addTodo} />
		</div>
	);
}
