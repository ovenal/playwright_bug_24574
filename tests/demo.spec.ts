import { test } from "@playwright/test";

test.afterEach(async ({page}) => {
    await page.close();
});

/*
* the tests are passed when they are executed from the command line or Playwright UI, 
* but the second test fails if it's executed from the VSCode
*/

test.describe("Demo", () => {
    test("test #1", async ({ page }) => {
        await doTest(page);
    });

    test("test #2", async ({ page }) => {
        await doTest(page);
    });

    async function doTest(page) {
        await page.goto("https://github.com/microsoft/playwright");
        await Promise.all([
            page.locator("#issues-tab").click(),
            page.waitForResponse(
                response => response.url().endsWith("/issues") && response.status() === 200
            )
        ]);
    }
});