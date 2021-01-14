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

    if(haystack[minValue-1] == needle && haystack[maxValue-1] != needle) {
        counter++;
    }

    if(haystack[minValue-1] != needle && haystack[maxValue-1] == needle) {
        counter++;
    }

}

console.log(counter);