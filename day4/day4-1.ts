import input from './input';

function replaceNewlineToBlank(inputString: string) : string {
    return inputString.split("\n").join(" ");
}

function countOccasionsInLine(line: string)  {
    let actualKeys = line
            .split(" ")
            .map(pair => pair.split(":"))
            .map(pair => pair[0]);

    return searchKeys
        .filter(searchKey => actualKeys.indexOf(searchKey) != -1)
        .length == searchKeys.length;
        
}

let searchKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let count = input
    .split("\n\n")
    .map(replaceNewlineToBlank)
    .map(countOccasionsInLine)
    .filter(occasion => occasion)
    .length;


console.log(count);