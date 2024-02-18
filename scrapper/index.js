import getGems from "./utils/gems/getGems.js";

async function main() {
    const gems = await getGems()
}

main().finally(() => {
    console.log("Operation finished!")
})
