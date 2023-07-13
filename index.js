const puppeteer = require("puppeteer")

const clicker = async () => {
    const browser = await puppeteer.launch({
        // headless: "new",
        headless: false,
        defaultViewport: false
    })

    const page = await browser.newPage();
    await page.goto("https://popcat.click/", {
        waitUntil: "domcontentloaded"
    })

    // uncomment the comments if you want to run 2 browser
    
    // const browser2 = await puppeteer.launch({
    //     // headless: "new",
    //     headless: false,
    //     defaultViewport: false
    // })

    // const newPage = await browser2.newPage();
    // await newPage.goto("https://popcat.click/", {
    //     waitUntil: "domcontentloaded"
    // })

    while (true) {
        let click = await page.click("div")
        // let click2 = await newPage.click("div")
    }
}

clicker()