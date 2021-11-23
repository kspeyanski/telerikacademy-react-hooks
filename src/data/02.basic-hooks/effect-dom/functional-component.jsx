import React from 'react';

import { align } from '../../../utils/align';
import { position } from '../../../utils/position';

const MovableBox = (props) => {
    const element = React.useRef();
    const [mount, setMount] = React.useState(false);

    React.useEffect(() => {
        align(element.current)
        setMount(true);
    }, [])

    React.useEffect(() => {
        console.log('Functional component is position')
        if(mount && props.anchor) {
            position(element.current, props.anchor)
        }
    }, 
    [mount, props.anchor]
    )

    return (
        <div
        ref={element}
        style={{
            zIndex: 10,
            position: 'absolute',
            padding: '10px',
            background: 'green',
            border: '1px solid red',
            opacity: mount ? 1 : 0,
            transition: 'all 1s ease-in-out',
        }}
    >
        Func
    </div>
    );
}

export default MovableBox;