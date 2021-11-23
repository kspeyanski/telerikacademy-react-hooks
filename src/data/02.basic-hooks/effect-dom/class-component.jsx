import React from 'react';

import { position } from '../../../utils/position';
import { align } from '../../../utils/align';

class MovableBox extends React.Component {
    element;

    constructor(props) {
        super(props);

        this.state = {
            mount: false
        }
    }

    componentDidMount() {
        if (this.element) {
            align(this.element);
            this.setState({ mount: true });
        }
    }

    componentDidUpdate() {
        console.log('Class component is position')
        if (this.element && this.props.anchor) {
            position(this.element, this.props.anchor)
        }
    }


    render() {
        return (
            <div
                ref={el => this.element = el}
                style={{
                    zIndex: 10,
                    position: 'absolute',
                    padding: '10px',
                    background: 'pink',
                    border: '1px solid red',
                    opacity: this.state.mount ? 1 : 0,
                    transition: 'all 1s ease-in-out',
                }}
            >
                Class
            </div>
        )
    }
}

export default MovableBox;