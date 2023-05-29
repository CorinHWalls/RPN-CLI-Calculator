/**
 * Standard error message. Takes in the error message and returns a standardized error string.
 * @param {string} err
 * @returns {string}
 */
export function errorMessage(err: string): string {
  return `Error: ${err}. Type '-help' for more information or try again.`;
}

/**
 * Generates a helper message for the RPN calculator application.
 * The helper message contains instructions on how to use the calculator, 
 * explanations of the available options and commands, as well as some examples.
 * This message can be displayed when the user types '-help' or '-h'.
 * @returns {string} A string containing the helper message.
 */
export function helperMessage(): string {
  return `
-----------------** RPN Calculator **----------------
Usage:
  npm run start         Start the calculator. This command begins 
                        the interactive mode, allowing you to enter 
                        numbers and operations.

Options:
  h, -help              Print this help message. This provides a quick 
                        overview of the available commands and options.

  q, -quit              Quit the calculator. This immediately ends the 
                        current session and closes the application.

  c, -clear             Clear the calculator state. This resets the 
                        calculator, removing all currently stored numbers 
                        from memory.

  s, -stack             Toggle show the stack after each operation. When 
                        enabled, the calculator will display the current 
                        state of the memory stack after each operation.

  d, -decimal           Toggle always show decimal numbers. When enabled, 
                        the calculator will always display results as 
                        decimal numbers, even if they are whole numbers.

Commands:
  +                     Add two numbers. This pops the last two numbers off 
                        the stack, adds them together, and pushes the result 
                        back onto the stack.

  -                     Subtract two numbers. This pops the last two numbers 
                        off the stack, subtracts the second one from the 
                        first one, and pushes the result back onto the stack.

  *                     Multiply two numbers. This pops the last two numbers 
                        off the stack, multiplies them, and pushes the result 
                        back onto the stack.

  /                     Divide two numbers. This pops the last two numbers 
                        off the stack, divides the first one by the second 
                        one, and pushes the result back onto the stack.

Example:
  > 5 5 +               # result: 10
  > 6 4 -               # result:  2
  > 5 5 3 * +           # result: 20
  > +                   # result: 22
  > -                   # result: -12
------------------------------------------------------
  `
}