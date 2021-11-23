import { counterReducer } from '../reducer/counter-reducer';

describe('Counter Reducer', () => {
  test('it should return 2 on increment', () => {
    // Arrange
    const initialState = 1;
    const type = 'increment';
    // Act
    const result = counterReducer(initialState, { type });
    // Asset
    expect(result).toEqual(2);
  })
  test('it should return 48 on increment', () => {
    // Arrange
    const initialState = 47;
    const type = 'increment';
    // Act
    const result = counterReducer(initialState, { type });
    // Asset
    expect(result).toEqual(48);
  })
})