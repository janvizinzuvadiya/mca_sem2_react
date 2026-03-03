// src/operations.js
export function sum(a, b) {
  return a + b;
}

export function div(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}