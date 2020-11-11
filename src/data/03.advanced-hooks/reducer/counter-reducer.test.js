const { counterReducer } = require("./counter-reducer")

describe('counterReducer', () => {
    it('should increment by step', () => {
        // Arrange
        const initial = 83;
        const step = 42;
        const type = 'increment';

        // Act
        const result = counterReducer(initial, { type, step })

        // Assert
        expect(result).toEqual(125)
    })
    it('should decrement by step', () => {
        // Arrange
        const initial = 11;
        const step = 6;
        const type = 'decrement';

        // Act
        const result = counterReducer(initial, { type, step })

        // Asset
        expect(result).toEqual(5)
    })
    it('should multiply by step', () => {
        // Arrange
        const initial = 40;
        const step = 3;
        const type = 'multiply';

        // Act
        const result = counterReducer(initial, { type, step })

        // Asset
        expect(result).toEqual(120)
    })
    it('should divide by step', () => {
        // Arrange
        const initial = 18;
        const step = 6;
        const type = 'divide';

        // Act
        const result = counterReducer(initial, { type, step })

        // Asset
        expect(result).toEqual(3)
    })
    it('should reset to zero', () => {
        // Arrange
        const initial = 42;
        const type = 'reset';

        // Act
        const result = counterReducer(initial, { type})

        // Asset
        expect(result).toEqual(0)
    })
})