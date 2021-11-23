import React from 'react';

import { position } from '../../../utils/position';
import { align } from '../../../utils/align';
import { BoxesContext } from './index';
const MovableBox = (props) => {
    const element = React.useRef();
    const [mount, setMount] = React.useState();
    const [boxes, registerBox] = React.useContext(BoxesContext);
    
    React.useLayoutEffect(() => {
        registerBox(props);
    }, [props, registerBox]);

    React.useEffect(() => {
        align(element.current);
        setMount(true);
    }, [boxes, props, registerBox])

    React.useEffect(() => {
        if (props.anchor) {
            position(element.current, props.anchor)
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