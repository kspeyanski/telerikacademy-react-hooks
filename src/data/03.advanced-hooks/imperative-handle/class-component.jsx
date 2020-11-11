import React from 'react';

class ClassComponent extends React.Component {
    element;

    render() {
        return (
            <div style={{ backgroundColor: 'lightpink' }}>
                Class Component
                <br />
                <input onChange={this.props.onChange} value={this.props.value} ref={el => this.element = el} tabIndex={-1} />
            </div>
        )
    }
}

export default ClassComponent;