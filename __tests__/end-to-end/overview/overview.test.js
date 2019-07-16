const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
});

afterEach(async () => {
  await browser.close();
});

test('test home page url', async () => {
  const url = await page.url();
  expect(url).toBe('http://localhost:3000/');
});
