import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe('generateResultText()', () => {
    it("Should return a string with the result", () => {
        // Arrange
        const result = '50';

        // Act
        const resultText = generateResultText(result);

        // Assert
        const expectedResult = `Result: ${result}`;
        expect(resultText).toBe(expectedResult);
    })

    it("Should return a invalid input message if an invalid input is provided", () => {
        // Arrange
        const result = 'Invalid Input';

        // Act
        const resultText = generateResultText(result);

        // Assert
        const expectedResult = 'Invalid input. You must enter valid numbers.';
        expect(resultText).toBe(expectedResult);
    })
})