import React, {Component} from 'react';

class List extends Component {
    render() {

        const list = this.props.elementValues.map((item, i) => {
            return <li key={i}>{item}</li>;
        });

        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default List;