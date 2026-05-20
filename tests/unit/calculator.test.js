// 단위 테스트: 함수 하나를 격리해서 테스트
import { add, calculate, subtract } from "../../src/calculator.js";

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

  test("결과가 음수여도 처리한다", () => {
    expect(subtract(3, 8)).toBe(-5);
  });
});

describe("calculate", () => {
  test("연산자 문자열로 알맞은 함수를 호출한다", () => {
    expect(calculate("add", 1, 2)).toBe(3);
  });

  test("subtract 연산자 문자열로 빼기를 호출한다", () => {
    expect(calculate("subtract", 7, 2)).toBe(5);
  });

  test("알 수 없는 연산자는 에러를 던진다", () => {
    expect(() => calculate("modulo", 1, 2)).toThrow("알 수 없는 연산자");
  });
});
