/**
 * Evaluates a string number to see if it is a valid number.
 * @param {string} value
 * @returns {boolean}
 */
export default function isNumber(value: string): boolean {
  return !isNaN(Number(value))
}