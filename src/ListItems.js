import React, {Component} from 'react';

class ListItems extends Component {
    render() {

        const listItem = this.props.tasks.map((item, i) => {
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
}

export default ListItems;