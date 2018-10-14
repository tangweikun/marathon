const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com')
  await page.pdf({ path: 'foo.pdf', format: 'Letter' })
  await browser.close()
})()
