import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState({value: 0, name: 'zero'});
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setCount({...count, value: 1})
    }
    
    // Break until 19:50

    const handleDecrement = () => {
        setCount(oldCount => ({value: count.value - step}));

    }

    const handleStepChange = (event) => setStep(Number(event.target.value))
    return (
        <div>
            <h1>Step: {step}</h1>
            <input type="number" value={step} onChange={handleStepChange}/>
            <div>{count.value}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;