import { test, expect } from '@playwright/test';

test('User can sell with MERN store', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Oliusik');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@test.com');
  await page.getByPlaceholder('Your Phone Number').fill('1231231231');
  await page.getByPlaceholder('Your Business Brand').fill('Stickers');
  await page.getByPlaceholder('Please Describe Your Business').fill('My business is successfull ');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
});