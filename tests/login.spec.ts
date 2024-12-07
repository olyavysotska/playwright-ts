import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/');
    await page.getByRole('link', { name: 'Welcome! ' }).click();
    await page.getByRole('menuitem', { name: 'Login' }).click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('xotabu4@gmail.com');
    await page.getByPlaceholder('Please Enter Your Password').click();
    await page.getByPlaceholder('Please Enter Your Password').fill('xotabu4@gmail.com');
    await page.getByRole('button', { name: 'Login' }).click();
  });