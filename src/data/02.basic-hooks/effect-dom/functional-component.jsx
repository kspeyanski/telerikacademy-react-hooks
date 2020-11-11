import React from 'react';

import { align } from '../../../utils/align';
import { position } from '../../../utils/position';

const MovableBox = (props) => {
    const element = React.useRef();
    const [mount, setMount] = React.useState();

    React.useEffect(
        () => {
            align(element.current)
            setMount(true);
        },
        []
    )

    React.useEffect(() => {
        if (props.anchor) {
            position(element.current, props.anchor, element.current.offsetHeight)
        }
    })

    return (
        <div
            ref={element}
            style={{
                zIndex: 10,
                position: 'absolute',
                padding: '10px',
                background: '#b3ffa5',
                border: '1px solid green',
                opacity: mount ? 1 : 0,
                transition: 'all 1.5s ease-in-out',
            }}
        >
            Functional
        </div>
    )
}

export default MovableBox;