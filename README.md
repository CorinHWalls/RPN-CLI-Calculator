# RPN-CLI-Calculator
The RPN CLI Calculator is a tool for performing calculations in Reverse Polish Notation (RPN) through the command line. It is designed for users who are comfortable with UNIX-like CLI utilities. With the calculator, users can easily and efficiently carry out basic arithmetic operations (addition, subtraction, multiplication, and division) right from the command line.

One important decision in the implementation is to use the `node:readline` module from Node.js. This module helps us read and write on the command line easily.

By using "readline", the calculator can handle user input and output smoothly, without needing other outside libraries. It simplifies the process of reading from the command line and writing to it, making it simple to create the calculator's command-line interface.
# Technical Choices and Architecture
Chosen for its performance, ease of use, and extensive community support, the CLI RPN Calculator is implemented in TypeScript and operates on Node.js. The code is structured into the subsequent components.

- **`index.ts:`** The entry point of the application, responsible for handling user input and output.
- **`Calculator:`** The core logic of the calculator, including the implementation of the arithmetic operators and the RPN evaluation algorithm.
- **`node:readline:`** Swapping out the input and output methods becomes simpler due to its modularity and abstraction, enabling the use of alternative interfaces like reading from a file or a network socket..

# Running the code
To run the CLI RPN Calculator, follow these steps:

- Ensure you have Node.js (version 14 or higher) and npm installed on your machine.
- Clone the repository: git clone `https://github.com/CorinHWalls/RPN-CLI-Calculator.git`
- Navigate to the project directory: `cd RPN-CLI-calculator`
- Install the dependencies: `npm install`
- Run the calculator: `npm run start`
- Enter your RPN expressions at the prompt and press Enter to see the result. Type `q` or use `Ctrl+D` (EOF) to exit the calculator.

# Running the Test Suite
To run the test suite for the CLI RPN Calculator, follow these steps:

- Ensure you have completed the prerequisites mentioned in the "Running the Code" section
- Navigate to the project directory: `cd RPN-CLI-calculator`
- Run the tests: `npm run test`
- To ensure accurate functionality and prevent regressions, the test suite utilizes the widely adopted `mocha` testing framework for JavaScript and TypeScript. It encompasses a range of scenarios and edge cases to thoroughly validate the calculator's performance.

# Key Logic and Implementation
To make the command-line calculator easy to use and understand, we included the following important features:

- **Welcome Message**: A friendly message that tells users about the available commands and operators, along with examples of how to use them.
- **Checking Input**: We make sure that users only enter numbers or valid operators. If they enter a long calculation, we check if the number of numbers matches the number of operators.
- **Error Messages**: If something goes wrong, we show an error message in a standard format. It explains what the problem is and gives suggestions on how to fix it.
- **Math Operations**: The calculator can do basic math operations like adding, subtracting, multiplying, and dividing.
- **RPN Calculation Method**: The calculator uses a method called Reverse Polish Notation (RPN) to calculate the results. It works like this:
    - Users enter numbers and operators one by one.
    - The calculator keeps track of these numbers and uses the operators to perform the calculations.
    - If there is an error, we ask the user to try again and start fresh.
 
# Application Commands
```
  h, -help              Print help message
  q, -quit              Quit the calculator
  c, -clear             Clear the calculator state
  s, -stack             Toggle show the stack after each operation
  d, -decimal           Toggle always show decimal numbers
  ```
     
     
  # Example of usage
  
  ```
> 5 5 +
10.0
> 5
5.0
> +
15.0
> 3 3 7 - +
-1.0
> 3 +
2.0
> -
13.0
```
