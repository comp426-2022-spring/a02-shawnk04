import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const args = require("minimist")(process.argv.slice(2));
args["number"];

if (args.number == undefined || args.number == "" || args.number == null) {
    let emptyflips = coinFlips(1);
    console.log(emptyflips);
    console.log(countFlips(emptyflips));
}
else {
    let num = args.number;
    let flips = coinFlips(num);
    console.log(flips);
    console.log(countFlips(flips));
}