import {errorMessage} from "./messages";
import  { OPERATORS, isOperator } from "./operations";
import colors from "colors";

/*
Visual example: 5 3 4 + *

Here's how the RPN calculator would handle this:

1. Push 5 onto the stack. (stack: 5)
2. Push 3 onto the stack. (stack: 5 3)
3. Push 4 onto the stack. (stack: 5 3 4)
4. Encounter +, so pop 4 and 3, add them to get 7, and push 7 back onto the stack. (stack: 5 7)
5. Encounter *, so pop 7 and 5, multiply them to get 35, and push 35 back onto the stack. (stack: 35)
6. Reach the end of the input, so 35 is the final result.
*/

/**
 * Stacks numbers into the passed stack array and performs the calculation. 
 * The token array must be validated beforehand. Returns the stack.
 * @param {number[]} stack - The stack to which numbers will be added.
 * @param {string[]} tokenArr - The array of tokens to be processed.
 * @returns {number[]} The updated stack after performing operations or an empty array in case of errors.
 */

export default function Calculator(stack: number[], tokenArr: string[]): number[] {
  let isError = false; // Flag to indicate if there has been an error during the operation.

  // Iterate through each token in the tokenArr array.
  for (const item of tokenArr) {
    if (isOperator(item)) {
      const lastNumber = stack.pop(); // Pop the last number from the stack.
      const secondLastNumber = stack.pop(); // Pop the second-last number from the stack.

      if (lastNumber === undefined || secondLastNumber === undefined) {
        // If there aren't enough numbers on the stack, print an error message and set the isError flag to true.
        console.log(
          colors.red(
            errorMessage(
              `Insufficient amount of numbers in the stack. The stack has been cleared.`
            )
          )
        );
        isError = true;
        break; // Exit the loop since the operation cannot be performed.
      }

      if (item === '/' && lastNumber === 0) {
        // If division by zero is attempted, print an error message and set the isError flag to true.
        console.log(colors.red(errorMessage(`Division by zero is not allowed. The operation cannot be performed. The stack has been cleared.`)));
        isError = true;
        break; // Exit the loop since the operation cannot be performed.
      }

      // Perform the operation using the appropriate operator and the two numbers from the stack.
      const result = OPERATORS[item](secondLastNumber, lastNumber);

      if (isNaN(result)) {
        // If the result is not a number, print an error message and set the isError flag to true.
        console.log(colors.red(errorMessage(`Invalid operation. The operation cannot be performed. The stack has been cleared.`)));
        isError = true;
        break; // Exit the loop since the operation cannot be performed.
      }

      // Push the result back onto the stack.
      stack.push(result);
    } else {
      // If the current token is a number, convert it to a number type and push it onto the stack.
      stack.push(Number(item));
    }
  }

  // If there was an error during the operation, return an empty array.
  // Otherwise, return the updated stack.
  return isError ? [] : stack;
}



