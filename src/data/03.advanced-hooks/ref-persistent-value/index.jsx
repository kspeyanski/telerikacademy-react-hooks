import React from 'react';

const INITIAL_VALUE = 0;

const Ref = () => {
    const [value, setValue] = React.useState(INITIAL_VALUE);
    const old = React.useRef();

    const handleChange = React.useCallback(
        (event) => {
            old.current = value;
            setValue(event.target.value)
        }, [value])

    React.useEffect(() => {
        console.log(`Updated from ${old} to ${value}`)
    })

    return (
        <div>
            <input type="number" value={value} onChange={handleChange} />
        </div>
    )
}

export default Ref;