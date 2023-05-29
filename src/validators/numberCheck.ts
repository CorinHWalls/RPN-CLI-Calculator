/**
 * Checks if a string represents a valid number.
 * @param {string} value - The string to be checked.
 * @returns {boolean} - Indicates if the string is a valid number.
 */
export function isValidNumber(value: string): boolean {
  return !isNaN(Number(value));
}