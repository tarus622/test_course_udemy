import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  let finalValue = 0;

  if (value !== null && value !== undefined)
    finalValue += +value;

  return finalValue;
}

export function cleanNumbers(numberInputs) {
  const numbers = [];

  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}