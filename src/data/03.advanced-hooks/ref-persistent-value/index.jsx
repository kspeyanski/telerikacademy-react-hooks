import React from 'react';

const INITIAL_VALUE = 0;

const Ref = () => {
    const previousValue = React.useRef(INITIAL_VALUE);
    const [value, setValue] = React.useState(INITIAL_VALUE);

    const handleChange = React.useCallback(
        (event) => {
            previousValue.current = value;
            setValue(event.target.value)
        }, [value])

    React.useEffect(() => {
        console.log(`successfully update from: ${previousValue.current} to: ${value}`)
    }, [value])

    return (
        <div>
            <input type="number" value={value} onChange={handleChange} />
        </div>
    )
}

export default Ref;