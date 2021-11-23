import React from 'react';

class ClassComponent extends React.Component {
    element;

    render() {
        return (
            <div style={{ backgroundColor: 'lightpink' }}>
                Class Component
                <br />
                <input ref={el => this.element = el} onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}

export default ClassComponent;                                                            