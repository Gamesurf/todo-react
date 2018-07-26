import React from 'react';

const ListItems = (props) => {

        const listItem = props.tasks.map((item, i) => {
            return <li className='list__item' key={i}>{item}</li>;
        });

        return (
                <ul className='list'>
                    {listItem}
                </ul>
        )
}

export default ListItems;