import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<h1>TodoList </h1>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>

					<li>
						<Link to='/todo'>Todo list</Link>
					</li>
					<li>
						<Link to='/todo/react-router-dom'>
							Todo list with react-router-dom
						</Link>
					</li>
					<li>
						<Link to='/todo/react-hooks'>Todo list with react hooks</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
