import React from 'react';

const ToDoItem = (props) => {
    return (
        <li className='list__item'>
            <button
                type="button"
                onClick={() => props.removeToDoItem(props.toDoKey)}
            >
                X
            </button>
            {props.task}
        </li>
    )
}

export default ToDoItem;