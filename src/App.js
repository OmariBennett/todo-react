import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Header from './components/layout/Header';
import TodoApp from './components/todo/Index';
import TodoAppRouter from './components/todoRouter/Index';
import TodoAppHooks from './components/todoHooks/Index';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<h1>Test</h1>
					<Route exact path='/' render={(props) => <h1>Hello World!</h1>} />
					<Route path='/about' component={About} />
					<Route exact path='/todo' component={TodoApp} />
					<Route
						exact
						path='/todo/react-router-dom'
						component={TodoAppRouter}
					/>
					<Route exact path='/todo/react-hooks' component={TodoAppHooks} />
				</div>
			</Router>
		);
	}
}
