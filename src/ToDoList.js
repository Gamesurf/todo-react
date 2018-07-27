import React, {Component} from 'react';
import ListItems from './ListItems';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	}

	reverse = () => {
		this.setState(this.state.tasks.reverse())
	};

	submitHandler = (event) => {
		event.preventDefault();

		const inputs = event.target.getElementsByClassName('formInput');
		const maxLength = 3;

		for (let input of inputs) {
			if (input.value.length >= maxLength) {
				this.setState({tasks: [...this.state.tasks, input.value]});
				input.value = '';
			} else {
				alert('Please enter ' + (maxLength - input.value.length) + ' more')
			}
		}
	};

	render() {

		return (
			<div className='todoList'>
				<form className='form' onSubmit={this.submitHandler.bind(this)}>
					<input className='formInput form__item' type="text"/>
					<button className='formButton form__item' type="submit">Submit</button>
				</form>
				<div onClick={this.reverse}>Reverse</div>
				<ListItems tasks={this.state.tasks}/>
			</div>
		)
	}
}

export default ToDoList;