export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다");
  }
  return a / b;
}

export function calculate(operator, a, b) {
  const ops = { add, subtract, multiply, divide };
  const fn = ops[operator];
  if (!fn) {
    throw new Error(`알 수 없는 연산자: ${operator}`);
  }
  return fn(a, b);
}
