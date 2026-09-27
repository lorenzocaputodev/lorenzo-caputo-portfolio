// ===== Test end-to-end del portfolio =====
import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const SECTION_IDS = ['about', 'journey', 'skills', 'project', 'contact']

test.describe('portfolio', () => {
  test.beforeEach(async ({ page }) => {
    page.errors = []
    page.on('pageerror', (error) => page.errors.push(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error' && /hydrat|Content Security Policy/i.test(message.text())) page.errors.push(message.text())
    })
  })

  test.afterEach(async ({ page }) => {
    expect(page.errors, 'uncaught page errors or hydration mismatches').toEqual([])
  })

  test('renders every section in Italian by default', async ({ page }) => {
    await page.goto('./')

    await expect(page.locator('html')).toHaveAttribute('lang', 'it')
    await expect(page).toHaveTitle('Lorenzo Caputo — Portfolio')
    await expect(page.locator('h1')).toContainText('Sviluppo software con cura')

    for (const id of SECTION_IDS) {
      await expect(page.locator(`section#${id}`)).toHaveCount(1)
    }
  })

  test('switches language by URL and remembers an explicit choice', async ({ page, isMobile }) => {
    await page.goto('./')

    if (isMobile) await page.getByRole('button', { name: 'Apri o chiudi il menu' }).click()
    await page.locator('.lang-switch:visible').getByRole('link', { name: 'EN' }).click()

    await expect(page).toHaveURL(/\/en\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('h1')).toContainText('I build software with care')

    await page.goto('./')
    await expect(page).toHaveURL(/\/en\/$/)

    if (isMobile) await page.getByRole('button', { name: 'Toggle navigation menu' }).click()
    await page.locator('.lang-switch:visible').getByRole('link', { name: 'IT' }).click()
    await expect(page).toHaveURL(/\/$/)
    await page.goto('./')
    await expect(page.locator('html')).toHaveAttribute('lang', 'it')
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

    const cvLinks = page.locator('a[download]')
    await expect(cvLinks).toHaveCount(2)
    for (const cvLink of await cvLinks.all()) {
      await expect(cvLink).toHaveAttribute('download', 'Lorenzo-Caputo-CV.pdf')
      const response = await request.get(await cvLink.getAttribute('href'))
      expect(response.ok()).toBe(true)
      expect(response.headers()['content-type']).toContain('pdf')
    }
  })

  test('has no detectable accessibility violations', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('./')

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze()

    expect(violations.map(({ id, nodes }) => `${id}: ${nodes.map((node) => node.target).join(', ')}`)).toEqual([])
  })

  test('highlights the right nav item, from the hero to the last section', async ({ page, isMobile }) => {
    test.skip(isMobile, 'desktop navigation')
    await page.goto('./')

    const nav = page.getByRole('navigation', { name: 'Principale' })
    await expect(nav.locator('[aria-current]')).toHaveCount(0)

    for (const label of await nav.getByRole('link').allTextContents()) {
      await nav.getByRole('link', { name: label }).click()
      await expect(nav.locator('[aria-current="location"]')).toHaveText(label)
    }

    await page.evaluate(() => window.scrollTo(0, 0))
    await expect(nav.locator('[aria-current]')).toHaveCount(0)
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
    await expect(nav.locator('[aria-current="location"]')).toHaveText('Contatti')
  })

  test('copies the email address', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.goto('./')

    const button = page.locator('.contact__copy')
    await expect(button).toHaveText('Copia email')
    await button.click()
    await expect(button).toHaveText('Email copiata')
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('lorenzocaputo2002.lc@gmail.com')
    await expect(button).toHaveText('Copia email', { timeout: 4000 })
  })

  test('scroll reveal shows every animated element', async ({ page }) => {
    await page.goto('./')

    for (const element of await page.locator('[data-reveal]').all()) {
      await element.scrollIntoViewIfNeeded()
    }

    await expect(page.locator('[data-reveal]:not(.is-visible)')).toHaveCount(0)
  })
})

test.describe('prerendered pages', () => {
  test('serve localized content and metadata at / and /en/', async ({ page }) => {
    await page.goto('./en/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page).toHaveTitle('Lorenzo Caputo — Portfolio')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://lorenzocaputo.is-a.dev/en/')
    await expect(page.locator('link[hreflang="it"]')).toHaveAttribute('href', 'https://lorenzocaputo.is-a.dev/')

    await page.goto('./')
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'it_IT')
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /social-preview-it\.jpg$/)
  })

  test('ship a Content Security Policy and a generated sitemap', async ({ page, request }) => {
    await page.goto('./')
    const csp = await page.locator('meta[http-equiv="Content-Security-Policy"]').getAttribute('content')
    expect(csp).toContain("script-src 'self' 'sha256-")
    expect(csp).toContain("object-src 'none'")

    const sitemap = await (await request.get('./sitemap.xml')).text()
    expect(sitemap).toContain('<loc>https://lorenzocaputo.is-a.dev/en/</loc>')
    expect(sitemap).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/)
  })

  test.describe('without JavaScript', () => {
    test.use({ javaScriptEnabled: false })

    test('shows the full content', async ({ page }) => {
      await page.goto('./')
      await expect(page.locator('h1')).toContainText('Sviluppo software con cura')

      const hidden = await page.locator('[data-reveal]').evaluateAll(
        (elements) => elements.filter((element) => getComputedStyle(element).opacity !== '1').length,
      )
      expect(hidden).toBe(0)
    })
  })

  test.describe('English-speaking browser', () => {
    test.use({ locale: 'en-US' })

    test('is not redirected away from the Italian page (safe for search engines)', async ({ page }) => {
      await page.goto('./')
      await expect(page.locator('html')).toHaveAttribute('lang', 'it')
    })
  })
})
