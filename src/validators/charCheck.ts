import { errorMessage } from "../components";
import { isValidNumber } from '../validators';
import {isOperator} from "../components/operations";
import colors from "colors";

/**
 * The charCheck function is responsible for checking if each character in the input array is a valid number or operator. 
 * It utilizes the isValidChar function to perform the actual check for individual characters.
 * The isValidChar function takes a character as input and determines if it is a valid number or operator. 
 * This separation allows for more granular control and maintainability of the code. 
 * It also enables reusability of the isValidChar function in other parts of the codebase if needed.
 */

/**
 * Checks if each character in the input array is a valid number or operator.
 * @param {string[]} characters - The array of characters to be checked.
 * @returns {boolean} - Indicates if all characters are valid.
 */

export function charCheck(characters: string[]): boolean {
  const isEveryCharValid = characters.every(isValidChar);

  if (!isEveryCharValid) {
    console.log(colors.red(errorMessage(`Invalid character`)));
  }

  return isEveryCharValid;
}

/**
 * Checks if a character is a valid number or operator.
 * @param {string} character - The character to be checked.
 * @returns {boolean} - Indicates if the character is valid.
 */
export function isValidChar(character: string): boolean {
  return isOperator(character) || isValidNumber(character);
}
