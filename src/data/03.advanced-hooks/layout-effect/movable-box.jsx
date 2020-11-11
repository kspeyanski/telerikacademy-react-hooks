import React from 'react';

import { position } from '../../../utils/position';
import { align } from '../../../utils/align';
import { findBeforeItem } from '../../../utils/find-before-item';
import { calculateOffset } from '../../../utils/calculate-offset';
import { BoxesContext } from './index';

const MovableBox = (props) => {
    const element = React.useRef();
    const target = React.useRef();
    const boxes = React.useContext(BoxesContext);
    const [mount, setMount] = React.useState();

    React.useImperativeHandle(target, () => ({ element: element.current, props }))

    React.useLayoutEffect(() => {
        boxes.current.set(props.id, target.current);
    })

    React.useEffect(() => {
        align(element.current);
        setMount(true);
    }, [])


    React.useEffect(() => {
        if (props.anchor) {
            const beforeMe = findBeforeItem(boxes.current, target.current)
            const offset = calculateOffset(beforeMe);
            position(element.current, props.anchor, offset)
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