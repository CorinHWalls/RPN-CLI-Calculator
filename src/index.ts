import * as readline from "node:readline";
import Calculator from "./tools/calculator";
import operationCheck from "./tools/operationCheck";
import helperMessage from "./tools/helperMessage";
import colors from "colors";

// This Readline interface is an instance of EventEmitter 
// and it's capable of "listening" to the process's standard input and output.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// numberStack is a stack of numbers where will be pushing the numbers inputted by the user.
let numberStack: number[] = [];

// These flags control whether the calculator should show the stack and decimal numbers.
let showStack = false;
let showDecimal = false;

// When the user asks for help, show the help message.
function handleHelp() {
  console.log(colors.blue(helperMessage()));
}

// When the user wants to quit the application, close the readline interface and exit the process.
function handleQuit() {
  console.log(colors.blue(`Thank you!`));
  rl.close();
  process.exit(0);
}

// Clears the number stack when the user requests it.
function handleClear() {
  numberStack = [];
  console.log(colors.blue(`calculator cleared`));
}

// Toggles the flag that controls whether the calculator should show the stack after each operation.
function handleShowStack() {
  showStack = !showStack;
  console.log(
    colors.blue(showStack ? "show stack enabled" : "show stack disabled")
  );
}

// Toggles the flag that controls whether the calculator should always show decimal numbers.
function handleShowDecimal() {
  showDecimal = !showDecimal;
  console.log(
    colors.blue(showDecimal ? "show decimal enabled" : "show decimal disabled")
  );
}

// Define a type for commands. Each command is a string mapped to a function.
type Commands = {
  [operator: string]: () => void;
};

// Create a map of the user commands to the corresponding functions.
const COMMANDS: Commands = {
  h: handleHelp,
  "-help": handleHelp,
  q: handleQuit,
  "-quit": handleQuit,
  c: handleClear,
  "-clear": handleClear,
  s: handleShowStack,
  "-stack": handleShowStack,
  d: handleShowDecimal,
  "-decimal": handleShowDecimal,
};

// Function to handle user input.
function handleUserInput(input: string) {
  // If the input is a command, execute the command.
  if (input in COMMANDS) {
    COMMANDS[input]();
    return;
  }

  // Filter the input to exclude empty strings.
  const filteredInput = input.split(" ").filter((item) => item !== "");

  // Check if the operation is valid.
  const _isOperationValid = operationCheck(filteredInput);
  if (!_isOperationValid) {
    return;
  }

  // Perform the calculation and update the number stack.
  numberStack = Calculator(numberStack, filteredInput);

  // If the showStack flag is true, print the number stack.
  if (showStack) {
    console.log(colors.blue("stack: "), numberStack);
  }

  // Get the index of the last number in the stack.
  const lastIndex = numberStack.length - 1;
  if (lastIndex < 0) {
    return;
  }

  // Show the result of the operation. If the showDecimal flag is true, always show decimal numbers.
  const lastNumber =
    !numberStack[lastIndex].toString().includes(".") && showDecimal
      ? numberStack[lastIndex].toFixed(1)
      : numberStack[lastIndex];
  console.log(colors.green(`result: ` + lastNumber));
}

// Show the welcome message and the help message, and start listening for user input.
rl.question(
  colors.blue(
    `Welcome to the Reverse Polish Notation (RPN) Calculator  ${helperMessage()} `
  ),
  handleUserInput
);

// Continuously listen for user input until the user quits.
rl.on("line", (answer: string) => {
  handleUserInput(answer);
});
