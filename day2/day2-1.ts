import input from './input';

const inputLines = input.split("\n");
const regex = RegExp('([0-9]*)-([0-9]*) ([a-z]{1}): ([a-z]*)', 'g');

let counter = 0;
for(let inputLine of inputLines) {
    const foundLines = Array.from(inputLine.matchAll(regex));
    const foundLine = foundLines[0];

    const minValue : number = Number(foundLine[1]);
    const maxValue : number = Number(foundLine[2]);
    const needle : string = foundLine[3].toString();
    const haystack : string = foundLine[4].toString();

    let lineRegex = new RegExp(needle, 'g');
    let occ = haystack.match(lineRegex)?.length;

    if(occ >= minValue && occ <= maxValue) {
        counter++;
    }
}

console.log(counter);