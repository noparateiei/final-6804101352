import { test, expect } from '@playwright/test';

test('UT-02: product button state Add to cart -> Remove -> Add to cart', {
  annotation: {
    type: 'description',
    description: 'ตรวจสอบสถานะปุ่ม Add to cart และ Remove รวมถึง Cart Badge'
  }
}, async ({ page }) => {
  const backpack = page.locator('[data-test="inventory-item"]', { hasText: 'Sauce Labs Backpack' });
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

  await test.step('Login เข้าสู่ระบบ', async () => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  await test.step('ตรวจสอบปุ่มก่อนเพิ่มสินค้า', async () => {
    await expect(backpack).toBeVisible();
    await expect(backpack.locator('button')).toHaveText('Add to cart');
    await expect(cartBadge).toHaveCount(0);
  });

  await test.step('เพิ่มสินค้าเข้า Cart', async () => {
    await backpack.locator('button', { hasText: 'Add to cart' }).click();
    await expect(backpack.locator('button')).toHaveText('Remove');
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');
  });

  await test.step('ลบสินค้าออกจาก Cart', async () => {
    await backpack.locator('button', { hasText: 'Remove' }).click();
    await expect(backpack.locator('button')).toHaveText('Add to cart');
    await expect(cartBadge).toHaveCount(0);
  });
});
