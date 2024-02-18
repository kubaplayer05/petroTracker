import loadIntoCheerio from "../loadIntoCheerio.js";
import Gem from "../../models/gemModel.js";

const url = "https://www.gia.edu/gem-encyclopedia"

async function getGems() {
    const $ = await loadIntoCheerio(url)

    const gems = []
    const $gemLibrary = $("#gem-library")

    $gemLibrary.find('a[data-parent="#gem-library"]').each(async (i, el) => {

        const title = el.children[0].children[0].data.toLowerCase()
        const roughImg = el.children[1].attribs.src
        const polishedImg = el.children[2].attribs.src

        const gem = new Gem(title, polishedImg, roughImg)

        await gem.fetchDetails()

        console.log(gem)

        gems.push(gem)
    })

    return gems
}

export default getGems
