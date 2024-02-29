import loadIntoCheerio from "../utils/cheerio/loadIntoCheerio.js";
import {getTextFromEl} from "../utils/cheerio/extractData.js";
import {query} from "../db/index.js";

const BASE_URL = "https://www.gia.edu"

export default class Gem {

    constructor(name, polishedImg = "", roughImg = "") {
        this.name = name
        this.polishedImg = polishedImg.startsWith("https") ? polishedImg : BASE_URL + polishedImg
        this.roughImg = roughImg.startsWith("https") ? roughImg : BASE_URL + roughImg
        this.mineral = null
        this.color = null
        this["refractive index"] = null
        this["specific gravity"] = null
        this["mohs hardness"] = null
        this["birefringence"] = null
    }

    // TODO: add support for chemistry compositions
    async getDetails() {

        const gemProperties = ["mineral", "color", "refractive index", "specific gravity", "mohs hardness", "birefringence"]

        const name = this.name.replaceAll(" ", "-")
        const url = `${BASE_URL}/${name}`

        try {
            const $ = await loadIntoCheerio(url)
            const $gemFacts = $("div.callout-container:nth-child(2) > div:nth-child(2) > ul")

            $gemFacts.find("li").each((i, el) => {

                let textFromLi = ""

                for (let j = 0; j < el.children.length; j++) {
                    const value = getTextFromEl(el.children[j])
                    textFromLi += value.trim()
                }

                const [property, valueOfProperty] = textFromLi.split(":")

                /* ** TODO **
                if (property === "Refractive index") {
                    this["minRefractiveIndex"] = valueOfProperty.includes("to") ? parseFloat(valueOfProperty.split("to")[0]) : parseFloat(valueOfProperty.split("-")[0])
                    this["maxRefractiveIndex"] = valueOfProperty.includes("to") ? parseFloat(valueOfProperty.split("to")[1]) : parseFloat(valueOfProperty.split("-")[1])
                }
                 */

                if (gemProperties.includes(property.toLowerCase())) {
                    this[`${property.toLowerCase()}`] = valueOfProperty
                }
            })

        } catch (e) {
            console.error(`could not get details about this gem: ${this.name}`)
        }
    }

    async uploadToDb() {
        const text = "INSERT INTO Gemstones(name, polishedImg, roughImg, mineral, color, mohsHardness, specificGravity, refractiveIndex, birefringence) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
        const params = [this.name, this.polishedImg, this.roughImg, this.mineral, this.color, this["mohs hardness"], this["specific gravity"], this["refractive index"], this["birefringence"]]

        return await query(text, params)
    }
}
