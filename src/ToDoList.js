import React, { Component } from 'react';
import List from './List';

class ToDoList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			elementValues: []
		}
	}

	submitHandler (event) {
		event.preventDefault();

		const formElements = event.target.elements;

		for (let element of formElements) {
			if (element.tagName === 'INPUT' && element.value.length) {
				this.setState({elementValues:[...this.state.elementValues, element.value]});
				element.value = '';
			}
		}
	}

	render() {


		return (
			<div className={'todo-list'}>
				<form onSubmit={this.submitHandler.bind(this)}>
					<input name={'asd'} type="text"/>
					<button type="submit">Submit</button>
				</form>
				<ul>
					<List elementValues={this.state.elementValues}/>
				</ul>
			</div>
		)
	}
}

export default ToDoList;