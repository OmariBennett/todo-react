import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
	state = { title: '' };

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label>
					Add Todo{' '}
					<input
						type='text'
						name='title'
						placeholder='Enter...'
						value={this.state.title}
						onChange={this.onChange}
					/>
				</label>

				<input type='submit' value='Submit' />
			</form>
		);
	}
}

/*
	When the propTypes is required it triggered a warning message 
	!Warning: 
		Failed prop type: The prop `AddTodo` is marked as required in `AddTodo`, but its value is `undefined`.
			* AddTodo.propTypes = {
			* 	AddTodo: PropTypes.func.isRequired,
			* };
*/

AddTodo.propTypes = {
	AddTodo: PropTypes.func,
};
