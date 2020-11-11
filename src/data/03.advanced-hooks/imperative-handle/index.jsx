import React from 'react';

import ClassComponent from './class-component';
import FunctionalComponent from './functional-component';

const ImperativeHandle = () => {
    const classRef = React.useRef(null);
    const functionalRef = React.useRef(null);

    const handleOnClassFocusClick = () => {
        if (classRef.current) {
            classRef.current.element.focus();
        }
    }

    const handleOnFunctionalFocusClick = () => {
        if (functionalRef.current) {
            functionalRef.current.element.focus();
        }
    }

    React.useEffect(() => {
        console.log({ 'classRef': classRef.current });
        console.log({ 'functionalRef': functionalRef.current });
    })

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button onClick={handleOnClassFocusClick}>Focus Class</button>
                <button onClick={handleOnFunctionalFocusClick}>Focus Functional</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ClassComponent ref={classRef} />
                <FunctionalComponent ref={functionalRef} />
            </div>
        </div>
    )
}

export default ImperativeHandle;