import errorMessage from "./errorMessage";
import  { OPERATORS, isOperator } from "./operations";
import colors from "colors";

/**
 * Stacks numbers into the passed stack array and performs the calculation. 
 * The token array must be validated beforehand. Returns the stack.
 * @param {number[]} stack - The stack to which numbers will be added.
 * @param {string[]} tokenArr - The array of tokens to be processed.
 * @returns {number[]} The updated stack after performing operations or an empty array in case of errors.
 */
export default function Calculator(stack: number[], tokenArr: string[]): number[] {
  let isError = false; // Flag to indicate if there has been an error during the operation.

  // Iterate through the tokens in the array.
  tokenArr.forEach((item: string) => {
    // If the current token is an operator, perform the operation.
    if (isOperator(item)) {
      // Pop the last two numbers from the stack.
      const lastNumber = stack.pop();
      const secondLastNumber = stack.pop();

      // If there aren't enough numbers on the stack, print an error message and set the error flag.
      if (lastNumber === undefined || secondLastNumber === undefined) {
        console.log(
          colors.red(
            errorMessage(
              `Invalid Operation. Not enough numbers in stack, stack cleared`
            )
          )
        );
        isError = true;
        return;
      }

      // If division by zero is attempted, print an error message and set the error flag.
      if (item === '/' && lastNumber === 0) {
        console.log(colors.red(errorMessage(`Invalid Operation. Division by zero, stack cleared`)));
        isError = true;
        return;
      }

      // Perform the operation and push the result back onto the stack.
      const result = OPERATORS[item](secondLastNumber, lastNumber);

      // If the result is not a number (due to some error), print an error message and set the error flag.
      if (isNaN(result)) {
        console.log(colors.red(errorMessage(`Invalid Operation. Division by zero, stack cleared`)));
        isError = true;
        return;
      }

      // Push the result back to the stack.
      stack.push(result);
    } else {
      // If the current token is a number, push it onto the stack.
      stack.push(Number(item));
    }
  });

  // If there was an error, return an empty array. Otherwise, return the updated stack.
  return !isError ? stack : [];
}
