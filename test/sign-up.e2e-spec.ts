import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('910735917')
  await page.getByRole('button', { name: 'Complete Registration' }).click()

  const toast = page.getByText('Restaurant registred with success!')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant name').fill('Invalid Name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('910735917')
  await page.getByRole('button', { name: 'Complete Registration' }).click()

  const toast = page.getByText('Error registering restaurant.')

  await expect(toast).toBeVisible()
})

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
})
