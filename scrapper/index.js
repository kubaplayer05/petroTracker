import getGems from "./utils/gems/getGems.js";
import getMinerals from "./utils/minerals/getMinerals.js";

async function main() {
    await getGems()
    await getMinerals()
}

main().finally(() => {
    console.log("Operation finished!")
})
