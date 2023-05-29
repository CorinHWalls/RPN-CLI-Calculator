/**
 * Type definition for an operation function. It takes two numbers and returns a number.
 */
type OperatorFunction = (a: number, b: number) => number;

/**
 * Type definition for a mapping of operator strings to operation functions.
 */
type OperatorMap = {
  [operator: string]: OperatorFunction;
};

/**
 * A dictionary of arithmetic operations. Each operation takes two numbers and performs
 * the corresponding operation.
 */
export const OPERATORS: OperatorMap = {
  /**
   * Adds two numbers.
   */
  "+": (a: number, b: number) => a + b,

  /**
   * Subtracts the second number from the first one.
   */
  "-": (a: number, b: number) => a - b,

  /**
   * Multiplies two numbers.
   */
  "*": (a: number, b: number) => a * b,

  /**
   * Divides the first number by the second one. Make sure to check the divisor isn't zero
   * before using this operator.
   */
  "/": (a: number, b: number) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};

/**
 * Checks if a string character is an arithmetic operator.
 * @param operator - The character to evaluate.
 * @returns True if the character is an arithmetic operator, otherwise false.
 */
export function isOperator(operator: string): boolean {
  return operator in OPERATORS;
}

