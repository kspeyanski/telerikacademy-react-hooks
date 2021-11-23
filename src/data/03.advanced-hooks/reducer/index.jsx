import React from 'react';
import { counterReducer, DEFAULT_COUNT } from './counter-reducer';

function Counter() {
    const [step, dispatchStep] = React.useReducer((state, action) => {
        switch(action.type) {
            case 'set':
                return action.payload;
            default:
                return state;
    }
}, 1);
    const [count, dispatchCount] = React.useReducer(counterReducer, DEFAULT_COUNT);

    const handleIncrementClick = () => {
        dispatchCount({ type: 'increment', step: step });
    }

    const handleDecrementClick = () => {
        dispatchCount({ type: 'decrement', step: step })
    }

    const handleReset = () => {
        dispatchCount({ type: 'reset' })
    }

    const handleStepChange = (event) => {
        dispatchStep({ type: 'set', payload: Number(event.target.value) })
    }

    return (
        <div>
            Current value: {count}
            <button onClick={handleIncrementClick}>Increment (+)</button>
            <button onClick={handleDecrementClick}>Decrement (-)</button>
            <button onClick={handleReset}>Reset</button>

            <input value={step} onChange={handleStepChange} type="number" />
        </div>
    )
}

export default Counter;