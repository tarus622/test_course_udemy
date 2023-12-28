import { expect, it, describe } from 'vitest';

import { add } from './math';

describe('add()', () => {

    it('Should summarize all number value in an array', () => {
        // Arrange
        const numbers = [1, 2, 3];

        // Act
        const result = add(numbers);

        // Assert
        const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
        expect(result).toBe(expectedResult);
    });

    it('Should yield a NaN if a least one invalid number is provided', () => {
        // Arrange
        const numbers = ['invalid', 1];

        // Act
        const result = add(numbers);

        // Assert
        expect(result).toBeNaN();
    })

    it('Should yield a correct sum if an array of numeric string values are provided', () => {
        // Arrange
        const numbers = ['1', '2', '3'];

        // Act
        const result = add(numbers);

        // Assert
        const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
        expect(result).toBe(expectedResult);
    });

    it('Should yield 0 if an empty array is provided', () => {
        // Arrange
        const numbers = [];

        // Act
        const result = add(numbers);

        // Assert
        expect(result).toBe(0);
    });

    it('Should throw an error if no value is passed into the function', () => {
        // Act
        const resultFn = () => add();

        // Assert
        expect(resultFn).toThrow();
    });

    it('Should throw an error if provided multiple arguments instead of an array', () => {
        // Arrange
        const num1 = 1;
        const num2 = 2;

        // Act
        const resultFn = () => add(num1, num2);

        // Assert
        expect(resultFn).toThrow();
    })
})