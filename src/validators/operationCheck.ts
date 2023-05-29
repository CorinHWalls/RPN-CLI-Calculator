import colors from "colors";
import { isValidNumber, charCheck } from "../validators";
import { errorMessage, isOperator } from "../components";


/**
 * Checks if a string represents a valid operation.
 * This is a pre-requisite for the operation.
 * @param {string[]} value - The string to be checked.
 * @returns {boolean} - Indicates if the operation is valid.
 */
export default function isOperationValid(value: string[]): boolean {
  // Check if every character is valid
  const isEveryCharValid = charCheck(value);
  if (!isEveryCharValid) {
    return false;
  }

  // Check if it is a single-line operation
  const isSingleLineOperation = value.length >= 3;
  if (!isSingleLineOperation) {
    return true;
  }

  // Check if the operation has valid number-operator sequence
  const numberOfOperators = value.filter(isOperator).length;
  const numberOfNumbers = value.filter(isValidNumber).length;
  const numbersMinusOperators = numberOfNumbers - numberOfOperators;
  const isOperationValid = numbersMinusOperators === 1;
  if (!isOperationValid) {
    if (numbersMinusOperators > 1) {
      console.log(colors.red(errorMessage(`Not enough operators`)));
    }
    if (numbersMinusOperators < 1) {
      console.log(colors.red(errorMessage(`Too many operators`)));
    }
  }

  return isOperationValid;
}
