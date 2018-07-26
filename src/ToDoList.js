import React, {Component} from 'react';
import ListItems from './ListItems';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        const inputs = event.target.getElementsByClassName('formInput');

        for (let input of inputs) {
            if (input.value.length >= 3) {
                this.setState({tasks: [...this.state.tasks, input.value]});
                input.value = '';
            } else {
                alert('Minimum three characters')
            }
        }
    }

    render() {

        return (
            <div className='todoList'>
                <form className='form' onSubmit={this.submitHandler.bind(this)}>
                    <input className='formInput form__item' type="text"/>
                    <button className='formButton form__item' type="submit">Submit</button>
                </form>
                <ListItems tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default ToDoList;