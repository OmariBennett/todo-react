import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Header from './components/layout/Header';
import TodoAppRouter from './components/todoRouter/Index';
// import TodoApp from './components/todo/Index';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					{/* <Route exact path='/' component={TodoApp} /> */}
					<Route exact path='/' component={TodoAppRouter} />
					<Route path='/about' component={About} />
				</div>
			</Router>
		);
	}
}
