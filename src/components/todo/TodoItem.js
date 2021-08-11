import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				{/* <label>Chekbox</label> */}
				<p>
					<input
						type='checkbox'
						onChange={this.props.toggleComplete.bind(this, id)}
					/>
					{title}
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};
