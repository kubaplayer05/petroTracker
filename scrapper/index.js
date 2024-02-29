import getGems from "./utils/gems/getGems.js";
import getMinerals from "./utils/minerals/getMinerals.js";

async function main() {
    await getMinerals()
    await getGems()
}

main().finally(() => {
    console.log("Operation finished!")
})
