import { expect } from 'chai';
import Calculator from '../src/tools/calculator';

describe('RPN Calculator', () => {
  // Test case 1
  it('should correctly evaluate addition', () => {
    const stack: number[] = [];
    const tokens: string[] = ['5', '3', '+'];
    const result = Calculator(stack, tokens);
    expect(result[0]).to.equal(8);
  });

  // Test case 2
  it('should correctly evaluate multiplication', () => {
    const stack: number[] = [];
    const tokens: string[] = ['5', '3', '*'];
    const result = Calculator(stack, tokens);
    expect(result[0]).to.equal(15);
  });

  // Test case 3
  it('should correctly handle empty input', () => {
    const stack: number[] = [];
    const tokens: string[] = [];
    const result = Calculator(stack, tokens);
    expect(result.length).to.equal(0);
  });

  // Test case 4
  it('should calculate "6 7 88 9 - + 0 - *" correctly', () => {
    const stack: number[] = [];
    const tokens: string[] = ['6', '7', '88', '9', '-', '+', '0', '-', '*'];
    const result = Calculator(stack, tokens);
    expect(result[0]).to.equal(516);
  });

  // Test case 5
  it('should calculate "5 5 5 8 + + -" properly', () => {
    const stack: number[] = [];
    const tokens: string[] = ['5', '5', '5', '8', '+', '+', '-'];
    const result = Calculator(stack, tokens);
    expect(result[0]).to.equal(-13);
  });

  // Test case 6
  it('should calculate "5 9 1 - /" properly', () => {
    const stack: number[] = [];
    const tokens: string[] = ['5', '9', '1', '-', '/'];
    const result = Calculator(stack, tokens);
    expect(result[0]).to.equal(0.625);
  });

  // Add more test cases here...
});


