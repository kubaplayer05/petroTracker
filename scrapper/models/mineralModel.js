import loadIntoCheerio from "../utils/cheerio/loadIntoCheerio.js";
import {getTextFromTd} from "../utils/cheerio/extractData.js";

const mineralProperties = ["name", "href", "color", "streak", "luster", "diaphaneity", "cleavage",
    "mohs hardness", "specific gravity", "diagnostic properties", "crystal system", "uses", "chemical classification"]

export default class Mineral {

    constructor(name, href) {
        this.name = name
        this.href = href
    }

    async getDetails() {

        try {
            const $ = await loadIntoCheerio(this.href)
            const selector = ".ref > tbody:nth-child(1)"

            const $table = $(selector)

            $table.find("tr").each((i, el) => {
                // skipping table headline
                if (i !== 0) {

                    const property = getTextFromTd(el.children).toLowerCase()
                    const valueOfProperty = getTextFromTd(el.children.reverse())

                    if (property === "chemical composition") {
                        // TODO: write function to correctly save data from chemical compositions
                    } else {
                        if ((!property.startsWith("\n")) &&
                            (property !== valueOfProperty.toLowerCase()) &&
                            (mineralProperties.includes(property))
                        ) {
                            this[`${property}`] = valueOfProperty
                        }
                    }
                }
            })
        } catch (err) {
            console.error(`Could not fetch details about: ${this.name}`)
        }
    }
}



