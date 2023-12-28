import { expect, it, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
    it('Should throw an error if an empty string or no argument is passed into the function', () => {
        // Arrange
        const string = '';

        // Act
        const resultFn = () => validateStringNotEmpty(string);
        const resultFn2 = () => validateStringNotEmpty();

        // Assert
        expect(resultFn).toThrow();
        expect(resultFn2).toThrow();
    })

    it('Should return undefined if a not empty string is passed into the function', () => {
        // Arrange
        const string = 'string';

        // Act
        const result = validateStringNotEmpty(string);

        // Assert
        expect(result).toBeUndefined();
    })
})

describe('validateNumber()', () => {
    it('Should throw an error if no number is passed into the function', () => {
        // Arrange
        const string = 'string';
        const numberString = '1';
        const obj = {};

        // Act
        const resultFn = () => validateNumber(string);
        const resultFn2 = () => validateNumber(obj);
        const resultFn3 = () => validateNumber();
        const resultFn4 = () => validateNumber(numberString);

        // Assert
        expect(resultFn).toThrow();
        expect(resultFn2).toThrow();
        expect(resultFn3).toThrow();
        expect(resultFn4).toThrow();
    })

    it('Should return undefined if a number is passed into the function', () => {
        // Arrange
        const number = 10;

        // Act
        const result = validateNumber(number);

        // Assert
        expect(result).toBeUndefined();
    })
})