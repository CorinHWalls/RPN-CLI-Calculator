import * as readline from "node:readline";
import Calculator from "./tools/calculator";
import operationCheck from "./tools/operationCheck";
import helperMessage from "./tools/helperMessage";
import colors from "colors";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberStack: number[] = [];
let showStack = false;
let showDecimal = false;

function handleHelp() {
  console.log(colors.blue(helperMessage()));
}

function handleQuit() {
  console.log(colors.blue(`Thank you!`));
  rl.close();
  process.exit(0);
}

function handleClear() {
  numberStack = [];
  console.log(colors.blue(`calculator cleared`));
}

function handleShowStack() {
  showStack = !showStack;
  console.log(
    colors.blue(showStack ? "show stack enabled" : "show stack disabled")
  );
}

function handleShowDecimal() {
  showDecimal = !showDecimal;
  console.log(
    colors.blue(showDecimal ? "show decimal enabled" : "show decimal disabled")
  );
}
type Commands = {
  [operator: string]: () => void;
};

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

function handleUserInput(input: string) {
  if (input in COMMANDS) {
    COMMANDS[input]();
    return;
  }

  const filteredInput = input.split(" ").filter((item) => item !== "");

  const _isOperationValid = operationCheck(filteredInput);
  if (!_isOperationValid) {
    return;
  }
  numberStack = Calculator(numberStack, filteredInput);
  if (showStack) {
    console.log(colors.blue("stack: "), numberStack);
  }
  const lastIndex = numberStack.length - 1;
  if (lastIndex < 0) {
    return;
  }
  const lastNumber =
    !numberStack[lastIndex].toString().includes(".") && showDecimal
      ? numberStack[lastIndex].toFixed(1)
      : numberStack[lastIndex];
  console.log(colors.green(`result: ` + lastNumber));
}

rl.question(
  colors.blue(
    `Welcome to Reverse Polish Notation (RPN) Calculator  ${helperMessage()} `
  ),
  handleUserInput
);

rl.on("line", (answer: string) => {
  handleUserInput(answer);
});