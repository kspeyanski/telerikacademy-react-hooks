import React from 'react';

const FunctionalComponent = React.forwardRef((props, ref) => {
    const element = React.useRef(null);

    React.useImperativeHandle(ref, () => ({ element: element.current }));

    return (
        <div style={{ backgroundColor: 'lightgreen' }}>
            Functional Component
            <br />
            <input ref={element} onChange={props.onChange} value={props.value} tabIndex={-1} />
        </div>
    )
});

export default FunctionalComponent;