import { test, expect } from '@playwright/test';

test('home, language and a service page', async ({ page }) => {
  await page.goto('/es');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Tu alojamiento merece mucho más que estar en Internet');
  await page.getByRole('link', { name: 'EN' }).first().click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Your property deserves much more than simply being online');
  await page.goto('/en/solutions/andario-booking-engine');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Your own booking channel');
});

test('contact form rejects an empty submit', async ({ page }) => {
  await page.goto('/es/contacto');
  await page.getByRole('button', { name: 'Solicitar diagnóstico digital' }).click();
  await expect(page.getByText('Revisa este campo.').first()).toBeVisible();
});

test('mobile menu opens and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/es');
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
});

test('unknown routes show the not found page', async ({ page }) => {
  const response = await page.goto('/es/no-existe');
  expect(response?.status()).toBe(404);
});
