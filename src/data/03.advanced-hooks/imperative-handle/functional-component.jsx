import React, { useRef } from 'react';

const FunctionalComponent = React.forwardRef((props, ref) => {
    const element = useRef();

    React.useImperativeHandle(ref, () => ({
        element: element.current, 
        props: props
    }))

    return (
        <div  style={{ backgroundColor: 'lightgreen' }} >
            Functional Component
            <br />
            <input ref={element} onChange={props.onChange} value={props.value} />
        </div>
    )
});

export default FunctionalComponent;