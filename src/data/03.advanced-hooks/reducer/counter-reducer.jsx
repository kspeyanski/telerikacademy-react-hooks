export const DEFAULT_COUNT = 0;
export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.step;
        case 'decrement':
            return state - action.step;
        case 'reset':
            return DEFAULT_COUNT;
        default:
            return state;
    }
}