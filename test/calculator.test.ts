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

  // Add more test cases here...
});

