import errorMessage from "./errorMessage";
import isNumber from "./numberCheck";
import {isOperator} from "./operations";
import colors from "colors";

/**
 * Evaluates the user's input to if it is a number or operator.
 * @param {string} value
 * @returns {boolean}
 */
export default function isCharValid(value: string[]): boolean {
  const isEveryCharValid = value.every(
    (item) => isOperator(item) || isNumber(item)
  );
  if (!isEveryCharValid) {
    console.log(colors.red(errorMessage(`Invalid character`)));
  }
  return isEveryCharValid;
}