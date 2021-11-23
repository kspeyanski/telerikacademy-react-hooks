import React from 'react';

import ClassComponent from './class-component';
import FunctionalComponent from './functional-component';

const ImperativeHandle = () => {
    const classRef = React.useRef(null);
    const functionalRef = React.useRef(null);

    const handleOnClassFocusClick = () => {
        classRef.current.element.focus()
    }

    const handleOnFunctionalFocusClick = () => {
        if(!functionalRef.current.props.disabled) {
            functionalRef.current.element.focus()
        }
    }

    React.useEffect(() => {
        // TODO;
    })

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button onClick={handleOnClassFocusClick}>Focus Class</button>
                <button onClick={handleOnFunctionalFocusClick}>Focus Functional</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ClassComponent ref={classRef} />
                <FunctionalComponent ref={functionalRef} disabled={true} />
            </div>
        </div>
    )
}

export default ImperativeHandle;