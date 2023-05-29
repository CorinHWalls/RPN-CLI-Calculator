import colors from "colors";
import isNumber from "./numberCheck";
import errorMessage from "./errorMessage";
import {isOperator} from "./operations";
import isCharValid from "./charCheck";

/**
 * Evaluates a string to see if it is a valid operation.
 * This is a pre-requisite for the operation
 * @param {string[]} value
 * @returns {boolean}
 */
export default function isOperationValid(value: string[]): boolean {
  // are characters either operators or numbers?
  const isEveryCharValid = isCharValid(value);
  if (!isEveryCharValid) {
    return false;
  }
 // is the operation a single line operation? If not, then no need to continue
  const isSingleLineOperation = value.length >= 3;
  if (!isSingleLineOperation) {
    return true;
  }

  // are there more operators than numbers or not enough operators?
  const numberOfOperators = value.filter((item) => isOperator(item)).length;
  const numberOfNumbers = value.filter((item) => isNumber(item)).length;
  const numbersMinusOperators = numberOfNumbers - numberOfOperators;
  const isOperationValid = numbersMinusOperators === 1;
  if (!isOperationValid) {
    if (numbersMinusOperators > 1)
      console.log(
        colors.red(errorMessage(`Not enough operators`))
      );
    if (numbersMinusOperators < 1)
      console.log(
        colors.red(errorMessage(`Too many operators`))
      );
  }
  return isOperationValid;
}