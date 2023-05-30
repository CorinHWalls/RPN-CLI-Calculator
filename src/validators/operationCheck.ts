import colors from "colors";
import { isValidNumber, charCheck } from "../validators";
import { errorMessage, isOperator } from "../components";

/**
 * Checks if a given string represents a valid operation.
 * This function ensures that the operation meets the criteria of:
 * - Having valid characters (numbers or operators)
 * - Being a single-line operation
 * - Having the correct number-operator sequence
 * 
 * It validates operations before further processing or evaluation.
 * @param {string[]} value - The string to be checked.
 * @returns {boolean} - Indicates if the operation is valid.
 */

export function isOperationValid(value: string[]): boolean {
  // Check if every character is valid
  const isEveryCharValid = charCheck(value);

  // If any character is invalid, return false
  if (!isEveryCharValid) {
    return false;
  }

  // Check if it is a single-line operation
  const isSingleLineOperation = value.length >= 3;

  // If it's not a single-line operation, return true
  if (!isSingleLineOperation) {
    return true;
  }

  // Check if the operation has valid number-operator sequence
  const numberOfOperators = value.filter(isOperator).length;
  const numberOfNumbers = value.filter(isValidNumber).length;
  const numbersMinusOperators = numberOfNumbers - numberOfOperators;
  const isOperationValid = numbersMinusOperators === 1;

  // If the number-operator sequence is not valid, display appropriate error messages
  if (!isOperationValid) {
    if (numbersMinusOperators > 1) {
      console.log(colors.red(errorMessage(`Not enough operators`)));
    } else if (numbersMinusOperators < 1) {
      console.log(colors.red(errorMessage(`Too many operators`)));
    }
  }

  return isOperationValid;
}

