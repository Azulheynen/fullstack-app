const puppeteer = require("puppeteer");

async function fetchSnippet(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const snippet = await page.evaluate(() => {
    // Adjust the selector based on the website's structure
    return document.querySelector("p").innerText;
  });
  await browser.close();
  return snippet;
}
