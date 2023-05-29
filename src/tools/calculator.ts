// Import readline for reading from standard input and writing to standard output.
import readline from 'readline';
// Import the defined operations and the isOperator function.
import { OPERATORS, isOperator } from './operations';

// Create a readline.Interface instance.
// This will allow us to read from the standard input and write to the standard output.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Listen to the 'line' event, which is emitted whenever a new line is received from the input.
rl.on('line', (input) => {
  // If the input is 'q', then close the readline interface and exit the program.
  if (input.toLowerCase() === 'q') {
    rl.close();
    process.exit(0);
  }

  // Split the input into tokens.
  const tokens = input.split(' ');
  // If the number of tokens isn't 3, then this isn't a valid command.
  if (tokens.length !== 3) {
    console.log('Invalid input. Please input in the following format: number operator number');
    return;
  }

  // Destructure the tokens into the operands and the operator.
  const [xStr, operator, yStr] = tokens;

  // Convert the operands to floating point numbers.
  const x = parseFloat(xStr);
  const y = parseFloat(yStr);

  // Check if the operands are valid numbers.
  if (Number.isNaN(x) || Number.isNaN(y)) {
    console.log('Invalid numbers provided.');
    return;
  }

  // Check if the operator is valid.
  if (!isOperator(operator)) {
    console.log(`Invalid operator. Available operators are: ${Object.keys(OPERATORS).join(', ')}`);
    return;
  }

  // Get the operation function corresponding to the operator.
  const operation = OPERATORS[operator];

  try {
    // Perform the operation and print the result.
    const result = operation(x, y);
    console.log(result);
  } catch (error) {
    // If there was an error (such as a division by zero), then print the error message.
    console.error(error.message);
  }
});

// Listen to the 'close' event, which is emitted when the readline interface is closed.
// When this event is emitted, we should exit the program.
rl.on('close', () => {
  process.exit(0);
});
