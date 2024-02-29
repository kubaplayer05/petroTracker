import loadIntoCheerio from "../utils/cheerio/loadIntoCheerio.js";
import {getTextFromTd} from "../utils/cheerio/extractData.js";
import {query} from "../db/index.js";

export default class Mineral {

    constructor(name, href) {
        this.name = name
        this.href = href
        this.color = null
        this.streak = null
        this.luster = null;
        this.diaphaneity = null;
        this.cleavage = null;
        this["mohs hardness"] = null;
        this["specific gravity"] = null;
        this["diagnostic properties"] = null;
        this["crystal system"] = null;
        this.uses = null;
        this["chemical classification"] = null;
    }

    async getDetails() {

        const mineralProperties = ["name", "href", "color", "streak", "luster", "diaphaneity", "cleavage",
            "mohs hardness", "specific gravity", "diagnostic properties", "crystal system", "uses", "chemical classification"]

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

    async uploadToDB() {
        const text = "INSERT INTO Minerals (name, color, streak, luster, diaphaneity, cleavage, mohsHardness, specificGravity, diagnosticProperties, crystalSystem, uses, chemicalClassification) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
        const params = [this.name, this.color, this.streak, this.luster, this.diaphaneity, this.cleavage, this["mohs hardness"], this["specific gravity"], this["diagnostic properties"], this["crystal system"], this.uses, this["chemical classification"]]

        return await query(text, params)
    }
}

