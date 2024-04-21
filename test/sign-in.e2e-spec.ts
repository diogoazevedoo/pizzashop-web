import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('Auth link sent to your e-mail.')

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('Invalid credentials.')

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New partner' }).click()

  expect(page.url()).toContain('/sign-up')
})
