import { expect, it, describe } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers";

describe('transformNumber()', () => {

    it("Should transform a number string to a number of number type", () => {
        // Arrange
        const numberString = '10';

        // Act
        const numberResult = transformToNumber(numberString);

        // Assert
        expect(numberResult).toBeTypeOf('number').toBe(+numberString);
    })

    it('Should yield a NaN if a least one invalid number is provided', () => {
        // Arrange
        const numberString = 'string';

        // Act
        const numberResult = transformToNumber(numberString);

        // Assert
        expect(numberResult).toBeNaN();
    })

    it('Should yield 0 if an empty string is provided', () => {
        // Arrange
        const numberString = '';

        // Act
        const numberResult = transformToNumber(numberString);

        // Assert
        expect(numberResult).toBe(0);
    })

    it('Should yield 0 if nothing is provided', () => {
        // Arrange
        let numberString;

        // Act
        const numberResult = transformToNumber(numberString);

        // Assert
        expect(numberResult).toBe(0);
    })
})

describe('cleanNumbers()', () => {
    it("Should transform each number string of an array of numbers to numbers, and return an array with these numbers", () => {
        // Arrange
        const numberInputs = ['5', '8', '21', '4'];

        // Act
        const result = cleanNumbers(numberInputs);
        // const result = numbers.reduce((prev, curr) => prev + curr);

        // Assert
        const expectedResult = numberInputs.map(n => +n);
        expect(result).toEqual(expectedResult);
    })

    it("Should throw an error if an invalid value in passed into the function", () => {
        // Arrange
        const invalidInput = 'invalid';

        // Act
        const result = () => cleanNumbers(invalidInput);

        // Assert
        expect(result).toThrow();
    })
})