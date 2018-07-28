import React, {Component} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Switch, Input } from 'antd';
import 'antd/dist/antd.css';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			isReversed: false
		}

		this.confirmMsg = withReactContent(Swal);
	}

	onChange = () => {
		this.setState(prevState => ({ tasks: prevState.tasks.reverse(), isReversed: !prevState.isReversed }));
	};

	submitHandler = (event) => {
		event.preventDefault();

		const formElements = event.target.elements;
		const MAX_LENGTH = 3;
		const { isReversed, tasks: TASKS_LIST } = this.state;

		for (let element of formElements) {
			const elementValue = element.value;

			if (element.classList.contains('formInput')) {
				if (elementValue.length >= MAX_LENGTH) {
					if (isReversed) {
						this.setState({ tasks: [elementValue, ...TASKS_LIST] });
					} else {
						this.setState({ tasks: [...TASKS_LIST, elementValue] });
					}

					element.value = '';
				} else {
					this.confirmMsg.fire(`Please enter ${MAX_LENGTH - elementValue.length} more characters.`);
				}
			}
		}
	};

	removeToDoItem = (toDoKey) => {
		let newToDoList = [...this.state.tasks];
		
		newToDoList.splice(toDoKey, 1);
		this.setState({ tasks: newToDoList });
	}

	render() {
		const TASKS_LIST = this.state.tasks;

		return (
			<div className='todoList'>
				<form className='form' onSubmit={this.submitHandler}>
					<Input className='formInput form__item' type="text" />
					<Button type="primary" className='formButton form__item' htmlType="submit">Submit</Button>
				</form>
				<div>
					<span>Reverse list</span>
					<Switch className='switchList' onChange={this.onChange} />
				</div>
				<ul className='list'>
					{TASKS_LIST.map((item, i) => (
						<ToDoItem task={item} key={i} toDoKey={i} removeToDoItem={this.removeToDoItem} />
					))}
				</ul>
			</div>
		);
	}
}

export default ToDoList;