import React, {Component} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Switch, Input } from 'antd';
import 'antd/dist/antd.css';

import ListItems from './ListItems';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}

	}

	onChange = () => {
		this.setState(this.state.tasks.reverse())
	};

	confirmMsg = withReactContent(Swal);



	submitHandler = (event) => {
		event.preventDefault();

		const inputs = event.target.getElementsByClassName('formInput');
		const maxLength = 3;

		for (let input of inputs) {
			if (input.value.length >= maxLength) {
				this.setState({tasks: [...this.state.tasks, input.value]});
				input.value = '';

			} else {
				this.confirmMsg.fire('Please enter ' + (maxLength - input.value.length) + ' more')
			}
		}
	};

	render() {


		return (
			<div className='todoList'>
				<form className='form' onSubmit={this.submitHandler.bind(this)}>
					<Input className='formInput form__item' type="text"/>
					<Button type="primary" className='formButton form__item' htmlType={'submit'}>Submit</Button>
				</form>
				<div>Reverse list <Switch className='switchList' onChange={this.onChange} /></div>
				<ListItems tasks={this.state.tasks}/>
			</div>
		)
	}
}

export default ToDoList;