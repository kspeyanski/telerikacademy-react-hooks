import React from 'react';
import { counterReducer } from './counter-reducer';

function Counter() {
    const [count, dispatchCount] = React.useReducer(counterReducer, 0);
    const [step, setStep] = React.useState(1);

    const handleIncrement = () => {
        dispatchCount({ type: 'increment', step });
    }

    const handleDecrement = () => {
        dispatchCount({ type: 'decrement', step });
    }

    const handleReset = () => {
        dispatchCount({ type: 'reset', step });
    }

    const handleMultiply = () => {
        dispatchCount({ type: 'multiply', step });
    }

    const handleDivide = () => {
        dispatchCount({ type: 'divide', step });
    }

    const handleStepChange = (event) => {
        setStep(Number(event.target.value));
    }

    return (
        <div>
            <h1>Current value: {count}</h1>
            <br />
            Step: {step} <input type="number" value={step} onChange={handleStepChange} />
            <button onClick={handleIncrement}>Increment (+)</button>
            <button onClick={handleDecrement}>Decrement (-)</button>
            <button onClick={handleMultiply}>Multiply (*)</button>
            <button onClick={handleDivide}>Divide (/)</button>
            <button onClick={handleReset} >Reset</button>
        </div>
    )
}

export default Counter;