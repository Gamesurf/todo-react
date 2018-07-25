import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import ToDoList from './ToDoList';

const destination = document.querySelector('#root');

ReactDOM.render(
		<ToDoList />,
	destination
);