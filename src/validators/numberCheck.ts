/**
 * Checks if a string represents a valid number. 
 * Determines if a string can be converted to a valid number by checking if the resulting value is not NaN.
 * @param {string} value - The string to be checked.
 * @returns {boolean} - Indicates if the string is a valid number.
 */
export function isValidNumber(value: string): boolean {
  // true if the value is a valid number and false if it is not.
  return !isNaN(Number(value));
}