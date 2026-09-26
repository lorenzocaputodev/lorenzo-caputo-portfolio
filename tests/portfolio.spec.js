import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const SECTION_IDS = ['about', 'growth', 'experience', 'skills', 'project', 'certifications', 'contact']

test.describe('portfolio', () => {
  test.beforeEach(async ({ page }) => {
    page.errors = []
    page.on('pageerror', (error) => page.errors.push(error.message))
  })

  test.afterEach(async ({ page }) => {
    expect(page.errors, 'uncaught page errors').toEqual([])
  })

  test('renders every section in Italian by default', async ({ page }) => {
    await page.goto('./')

    await expect(page.locator('html')).toHaveAttribute('lang', 'it')
    await expect(page).toHaveTitle('Lorenzo Caputo — Portfolio')
    await expect(page.locator('h1')).toContainText('Sto imparando a sviluppare')

    for (const id of SECTION_IDS) {
      await expect(page.locator(`section#${id}`)).toHaveCount(1)
    }
  })

  test('switches language and remembers the choice', async ({ page, isMobile }) => {
    await page.goto('./')

    if (isMobile) await page.getByRole('button', { name: 'Apri o chiudi il menu' }).click()
    await page.locator('.lang-switch:visible').getByRole('button', { name: 'EN' }).click()

    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('h1')).toContainText('Learning to build software')

    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('mobile menu opens, navigates and closes with Escape', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only navigation')
    await page.goto('./')

    const toggle = page.getByRole('button', { name: 'Apri o chiudi il menu' })
    const menu = page.locator('#mobile-nav')

    await toggle.click()
    await expect(menu).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await page.keyboard.press('Escape')
    await expect(menu).toBeHidden()

    await toggle.click()
    await menu.getByRole('link', { name: 'Contatti' }).click()
    await expect(menu).toBeHidden()
    await expect(page.locator('#contact')).toBeInViewport()
  })

  test('all images load and CV is downloadable', async ({ page, request }) => {
    await page.goto('./')

    const images = page.locator('img')
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded()
      await expect.poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true)
    }

    const cvLink = page.locator('a[download]')
    await expect(cvLink).toHaveAttribute('download', 'Lorenzo-Caputo-CV.pdf')
    const response = await request.get(await cvLink.getAttribute('href'))
    expect(response.ok()).toBe(true)
    expect(response.headers()['content-type']).toContain('pdf')
  })

  test('has no detectable accessibility violations', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('./')

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze()

    expect(violations.map(({ id, nodes }) => `${id}: ${nodes.map((node) => node.target).join(', ')}`)).toEqual([])
  })

  test('highlights no nav item in the hero, then the section in view', async ({ page, isMobile }) => {
    test.skip(isMobile, 'desktop navigation')
    await page.goto('./')

    const nav = page.getByRole('navigation', { name: 'Principale' })
    await expect(nav.locator('[aria-current]')).toHaveCount(0)

    await page.locator('#skills').scrollIntoViewIfNeeded()
    await expect(nav.locator('[aria-current="location"]')).toHaveText('Competenze')
  })

  test('scroll reveal shows every animated element', async ({ page }) => {
    await page.goto('./')

    // Scroll through the page like a reader would, element by element.
    for (const element of await page.locator('[data-reveal]').all()) {
      await element.scrollIntoViewIfNeeded()
    }

    await expect(page.locator('[data-reveal]:not(.is-visible)')).toHaveCount(0)
  })
})

test.describe('browser language detection', () => {
  test.use({ locale: 'en-US' })

  test('uses English for English-speaking browsers', async ({ page }) => {
    await page.goto('./')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })
})
