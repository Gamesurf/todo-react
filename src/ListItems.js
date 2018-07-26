import React from 'react';

const ListItems = (props) => {

        const listItem = props.tasks.map((item, i) => {
            return <li key={i}>{item}</li>;
        });

        return (
            <div>
                <ul>
                    {listItem}
                </ul>
            </div>
        )
}

export default ListItems;