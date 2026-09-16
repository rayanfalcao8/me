import { test, expect } from '@playwright/test';

test('featured projects can be selected from the keyboard and open the matching case study', async ({ page }) => {
  for (const locale of ['fr', 'en']) {
    await page.goto('/' + locale + '/');
    const choice = page.locator('.work-selector').getByRole('button', { name: /Reservix/ });
    await choice.focus();
    await page.keyboard.press('Enter');
    await expect(choice).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.featured-story h3')).toHaveText('Reservix');
    await expect(page.locator('.featured-case-link')).toHaveAttribute('href', '/' + locale + '/work/reservix/');
    await page.locator('.featured-case-link').click();
    await expect(page).toHaveURL(new RegExp('/' + locale + '/work/reservix/'));
  }
  await page.setViewportSize({ width: 1440, height: 1060 });
  await page.goto('/fr/');
  await page.locator('#selected-work').scrollIntoViewIfNeeded();
  await page.evaluate(() => document.fonts.ready);
  await expect.poll(() => page.locator('.production-frame img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  await page.locator('#selected-work').screenshot({ path: '../docs/portfolio-v2/previews/projets-desktop.png', animations: 'disabled' });
});

const routes = [
  '', 'work/', 'experience/', 'education/', 'about/',
  'work/pneus-ratte-tiredirect/', 'work/reservix/', 'work/cotitrace/', 'work/mirev-access/',
  'work/cosna-afrique/', 'work/loov-solutions/',
];

test('the exported French and English routes have the correct language, content and internal destinations', async ({ page, request }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const destinations = new Set<string>();
  for (const lang of ['fr', 'en']) {
    for (const route of routes) {
      const response = await page.goto(`/${lang}/${route}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toBeVisible();
      expect(await page.title()).toContain('Rayan Tsolefack');
      const links = await page.locator('a[href]').evaluateAll((items) => items.map((item) => item.getAttribute('href')!));
      for (const href of links) {
        expect(href).not.toBe('#');
        if (href.startsWith('/') && !href.startsWith('//')) destinations.add(href.split('#')[0]);
        if (href.startsWith('#')) expect(await page.locator(href).count()).toBe(1);
      }
    }
  }
  for (const href of destinations) expect((await request.get(href)).status(), href).toBe(200);
  expect(errors).toEqual([]);
});

test('locale switching keeps the current case study', async ({ page }) => {
  await page.goto('/fr/work/reservix/');
  await page.getByRole('link', { name: 'Read this page in English' }).click();
  await expect(page).toHaveURL(/\/en\/work\/reservix\//);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'Decisions & approach' })).toBeVisible();
});

test('work filters show the appropriate projects and can be reset', async ({ page }) => {
  await page.goto('/fr/work/');
  await page.getByRole('button', { name: 'SaaS', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Reservix', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'MirevAccess', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'CotiTrace', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Tous', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'CotiTrace', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Relex', exact: true })).toBeVisible();
});

test('mobile navigation leads to education and closes', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/fr/');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.click();
  await expect(page.getByRole('button', { name: 'Fermer' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Formation', exact: true }).click();
  await expect(page).toHaveURL(/\/fr\/education\//);
  await expect(page.getByRole('heading', { name: 'Université Laval' })).toBeVisible();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('pages fit small phones, tablets and desktop; reduced motion and keyboard entry work', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ['/fr/', '/en/', '/fr/education/', '/en/work/pneus-ratte-tiredirect/']) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflow, `${path} at ${width}px`).toBe(false);
    }
  }
  await page.goto('/fr/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Aller au contenu' })).toBeFocused();
});

test('contact points to the real public address and reports copy failures without losing it', async ({ page }) => {
  await page.goto('/fr/');
  await expect(page.locator('.email-link')).toHaveAttribute('href', 'mailto:rayanfalcao8@gmail.com');
  await expect(page.getByRole('link', { name: /CV FR/ })).toHaveAttribute('href', '/cv/Rayan-Tsolefack-CV-FR.pdf');
  await expect(page.getByRole('link', { name: /Resume EN/ })).toHaveAttribute('href', '/cv/Rayan-Tsolefack-Resume-EN.pdf');
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Permission denied'); } } }));
  await page.getByRole('button', { name: 'Copier le courriel' }).click();
  await expect(page.getByRole('status')).toContainText('Copie indisponible');
  await expect(page.locator('.email-link')).toBeVisible();
});
