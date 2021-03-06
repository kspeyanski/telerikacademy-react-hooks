import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                Current value: {this.state.count}
                <button onClick={this.handleIncrement}>Increment (+)</button>
                <button onClick={this.handleDecrement}>Decrement (-)</button>
            </div >
        )
    }

}

export default Counter;