/**
 * Standard error message. Takes in the error message and returns a standardized error string.
 * @param {string} err
 * @returns {string}
 */
export default function errorMessage(err: string): string {
  return `Error: ${err}. Type '-help' for more information or try again.`;
}