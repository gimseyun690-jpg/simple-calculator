export function add(a, b) {
 return a + b;
}
export function subtract(a, b) {
 return a - b;
}
export function multiply(a, b) {
 return a * b;
}
export function calculate(operator, a, b) {
 const ops = { add, subtract };
 const fn = ops[operator];
 if (!fn) {
 throw new Error(`알 수 없는 연산자: ${operator}`);
 }
 return fn(a, b);
}