
import { test, expect } from '@playwright/test';
//const { chromium } = require('@playwright/test');
test.use({ignoreHTTPSErrors: true});





test('Org.Edenici', async ({ page }) => {


    await page.goto('https://demo.u-system.tech/dicts/ou');


    //Создаем рога и копыта
    await page.getByRole('button', {name: 'Создать'}).click();
    await page.getByLabel('Название').fill('Рога и копыта');
    await page.getByLabel('Тип').click();
    await page.getByText('Организация').click();
    await page.getByLabel('Создание орг. единицы').getByRole('button', {name: 'Создать'}).click();


    await page.mouse.move(830, 568);
    await page.mouse.wheel(0, 2000)
    await expect(page.locator('div').filter({hasText: /^Рога и копыта$/}).first()).toBeVisible()

});