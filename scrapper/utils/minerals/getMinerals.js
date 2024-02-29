import loadIntoCheerio from "../cheerio/loadIntoCheerio.js";
import Mineral from "../../models/mineralModel.js";

async function getMinerals() {
    const url = "https://geology.com/minerals"

    const $ = await loadIntoCheerio(url)
    const minerals = []

    const selector = ".right > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2)"
    const $table = $(selector)

    $table.find("a").each(async (i, el) => {
        const href = el.attribs.href
        const name = el.children[0].data

        const mineral = new Mineral(name, href)
        await mineral.getDetails()
        await mineral.uploadToDB()

        minerals.push(mineral)
    })

    return minerals
}

export default getMinerals
