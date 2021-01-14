import input from './input';

const inputArray = input.split("\n");

let treeCounter : number = 0;
let currentIndex : number = 0;

inputArray.forEach(inputLine => {
    const inputLineArray = Array.from(inputLine);
    
    if(inputLineArray[currentIndex] == "#") {
        treeCounter++;
    }

    currentIndex += 3;
    if(currentIndex > inputLine.length - 1) {
        currentIndex -= inputLine.length;
    }    

});

console.log(treeCounter);