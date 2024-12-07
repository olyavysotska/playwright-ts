import { test, expect } from '@playwright/test';

test('User can purchase product after login', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('xotabu4@gmail.com');
  await page.getByPlaceholder('Please Enter Your Password').fill('xotabu4@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading',{name:'Login'})).not.toBeVisible()
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('heading', { name: 'Thank you for your order.' }).click();
  await expect(page.getByRole('heading',{name:'Thank you for your order.'})).toBeVisible()
});