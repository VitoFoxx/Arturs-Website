import { chromium } from 'playwright';

const browser = await chromium.launch({ 
  headless: true,
  executablePath: '/opt/pw-browsers/chromium'
});

const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/irinas-website.png', fullPage: true });

await browser.close();
console.log('Screenshot saved to /tmp/irinas-website.png');
