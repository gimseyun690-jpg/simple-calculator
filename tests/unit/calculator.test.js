// 단위 테스트: 함수 하나를 격리해서 테스트
import { add, calculate, divide, multiply, subtract } from "../../src/calculator.js";

describe("add", () => {
  test("두 양수를 더한다", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("음수도 처리한다", () => {
    expect(add(-2, 5)).toBe(3);
  });
});

describe("subtract", () => {
  test("두 수를 뺀다", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("음수 결과도 처리한다", () => {
    expect(subtract(3, 10)).toBe(-7);
  });
});

describe("multiply", () => {
  test("두 수를 곱한다", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("0을 곱하면 0이 된다", () => {
    expect(multiply(9, 0)).toBe(0);
  });
});

describe("divide", () => {
  test("두 수를 나눈다", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("0으로 나누면 에러를 던진다", () => {
    expect(() => divide(5, 0)).toThrow("0으로 나눌 수 없습니다");
  });
});

describe("calculate", () => {
  test("연산자 문자열로 알맞은 함수를 호출한다", () => {
    expect(calculate("add", 1, 2)).toBe(3);
  });

  test("multiply 연산자를 호출한다", () => {
    expect(calculate("multiply", 2, 9)).toBe(18);
  });

  test("divide 연산자를 호출한다", () => {
    expect(calculate("divide", 8, 2)).toBe(4);
  });

  test("알 수 없는 연산자는 에러를 던진다", () => {
    expect(() => calculate("modulo", 1, 2)).toThrow("알 수 없는 연산자");
  });
});
