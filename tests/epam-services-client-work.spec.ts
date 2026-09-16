import { test, expect } from '@playwright/test';

test('EPAM Services - Verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to the EPAM website.
  await page.goto('https://www.epam.com/', {
    waitUntil: 'domcontentloaded',
  });

  // Step 2: Select "Services" from the header menu.
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Step 3: Click the "Explore Our Client Work" link.
  await page
    .getByRole('link', { name: 'Explore Our Client Work', exact: true })
    .click();

  // Step 4: Verify that the "Client Work" text is visible on the page.
  await expect(
    page.getByText('Client Work', { exact: true }).first()
  ).toBeVisible();
});
