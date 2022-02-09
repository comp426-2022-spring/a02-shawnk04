import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);
if (args.length == 0) {
    let emptyflips = coinFlips(1);
    console.log(emptyflips);
    console.log(countFlips(emptyflips));
}
else {
    let numbers = [];

    for (let i = 0; i < args[0].length; i++) {
        if (!isNaN(args[0][i])) {
            numbers.push(args[0][i]);
        }
    }

    let num = Number(numbers.join(""));

    let flips = coinFlips(num);
    console.log(flips);
    console.log(countFlips(flips));
}