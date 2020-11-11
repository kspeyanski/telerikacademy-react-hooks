export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.step;
        case 'decrement':
            return state - action.step;
        case 'multiply':
            return state * action.step;
        case 'divide':
            return state / action.step;
        case 'reset':
            return 0;
        default:
            return state;
    }
}