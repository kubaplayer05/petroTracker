import loadIntoCheerio from "../utils/loadIntoCheerio.js";

export default class Gem {
    constructor(name, polishedImg = null, roughImg = null) {
        this.name = name
        this.polishedImg = polishedImg
        this.roughImg = roughImg
    }

    // TODO: fix fetching for chemistry, fix fetching facts where first li tag is empty
    async fetchDetails() {

        const url = `https://www.gia.edu/${this.name}`

        try {
            const $ = await loadIntoCheerio(url)

            const $gemFacts = $("div.callout-container:nth-child(2) > div:nth-child(2) > ul")

            $gemFacts.find("li").each((i, el) => {
                const value = i !== 1 ? el.children[2].data.trim() : ''

                switch (i) {
                    case 0:
                        this.mineral = value
                        break
                    case 1:
                        this.chemistry = value
                        break
                    case 2:
                        this.color = value
                        break
                    case 3:
                        this.refractiveIndex = value
                        break
                    case 4:
                        this.birefringence = value
                        break
                    case 5:
                        this.specificGravity = value
                        break
                    case 6:
                        this.mohsHardness = value
                        break
                }
            })
        } catch (e) {
            console.error(`could not get details about this gem: ${this.name}`)
        }
    }
}
