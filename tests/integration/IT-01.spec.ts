import { test, expect } from '@playwright/test';

// Inventory STUB: DOM จำลองระดับ Browser แทนหน้า Inventory จริง (ไม่ใช่ Internal Module ของ SauceDemo)
const inventoryStubHtml = `
  <!doctype html>
  <html>
    <head><title>Inventory Stub</title></head>
    <body>
      <h1 data-test="stub-status">Mock Inventory Ready</h1>
      <ul data-test="stub-inventory-list">
        <li data-test="stub-inventory-item">Mock Backpack</li>
        <li data-test="stub-inventory-item">Mock Bike Light</li>
      </ul>
    </body>
  </html>
`;

test('IT-01: top-down REAL Login -> browser-level Inventory STUB', {
  annotation: {
    type: 'description',
    description: 'ทดสอบ Login จริงร่วมกับ Inventory Stub ที่จำลองด้วย page.setContent()'
  }
}, async ({ page }) => {
  await test.step('Login ผ่านหน้าเว็บไซต์จริง', async () => {
    // REAL: Login Module ของ SauceDemo
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  await test.step('สร้าง Inventory Stub', async () => {
    // STUB: แทนที่การแสดงผลหน้า Inventory ด้วย page.setContent()
    await page.setContent(inventoryStubHtml);
    await expect(page).toHaveTitle('Inventory Stub');
  });

  await test.step('ตรวจสอบผลจาก Stub', async () => {
    await expect(page.locator('[data-test="stub-status"]')).toHaveText('Mock Inventory Ready');
    const items = page.locator('[data-test="stub-inventory-item"]');
    await expect(items).toHaveCount(2);
    await expect(items).toHaveText(['Mock Backpack', 'Mock Bike Light']);
  });
});
