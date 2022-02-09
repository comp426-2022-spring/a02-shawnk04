import { flipACoin } from "./modules/coin.mjs";

const args = process.argv.slice(2);
if (args.length == 0) {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]\n");
}
else {
    let call = args[0].substring(args[0].length - 5);

    if (call == "heads" || call == "tails") {
        console.log(flipACoin(call));
        console.log("");
    }
    else {
        console.log("Error: invalid input. Input must be heads or tails.\nUsage: node guess-flip --call=[heads|tails]\n");
    }
}