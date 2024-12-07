import { test, expect } from '@playwright/test';


const users = [ 'olhavtest66@gmail.com', 'olhavtest67@gmail.com']

users.forEach((user)=>{
  test(`test for ${user}`, async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/');
    await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
    await page.getByPlaceholder('You Full Name').click();
    await page.getByPlaceholder('You Full Name').fill('Olha V');
    await page.getByPlaceholder('Your Email Address').click();
    await page.getByPlaceholder('Your Email Address').fill(user);
    await page.getByPlaceholder('Your Email Address').dblclick();
    await page.getByPlaceholder('Please Describe Your Message').click();
    await page.getByPlaceholder('Please Describe Your Message').fill('Hello. Please contact me');
    await page.getByRole('button', { name: 'Submit' }).click();
  });
})