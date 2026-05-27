import { test, expect } from "@playwright/test";

test.describe("계산기 E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("페이지 제목이 보인다", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("간단 계산기");
  });

  test("12 + 30 = 42", async ({ page }) => {
    await page.getByTestId("inputA").fill("12");
    await page.getByTestId("inputB").fill("30");
    await page.getByTestId("btn-add").click();
    await expect(page.getByTestId("display")).toHaveText("42");
  });

  test("100 ÷ 4 = 25", async ({ page }) => {
    await page.getByTestId("inputA").fill("100");
    await page.getByTestId("inputB").fill("4");
    await page.getByTestId("btn-divide").click();
    await expect(page.getByTestId("display")).toHaveText("25");
  });

  test("0으로 나누면 에러 메시지가 표시된다", async ({ page }) => {
    await page.getByTestId("inputA").fill("9");
    await page.getByTestId("inputB").fill("0");
    await page.getByTestId("btn-divide").click();
    await expect(page.getByTestId("display")).toContainText("에러");
  });
});
