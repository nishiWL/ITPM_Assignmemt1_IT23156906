const { test, expect } = require('@playwright/test');

test('UI_Pos_0001 simple', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  
  const input = page.locator('textarea');
  await input.fill('test input');
  await page.waitForTimeout(2000);
  
  await page.getByText('🗑️ Clear').click();
  await page.waitForTimeout(1000);
  
  await expect(input).toHaveValue('');
  await expect(page.locator('div.bg-slate-50')).toHaveText('');
});