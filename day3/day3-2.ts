import input from './input';

const inputArray = input.split("\n");

let move = (right: number, down: number): number => {
    let treeCounter : number = 0;
    let currentIndex : number = 0;
    inputArray.forEach((inputLine, index) => {
        let inputLineArray = Array.from(inputLine);
        if(index % down == 0) {
            
            if(inputLineArray[currentIndex] == "#") {
                treeCounter++;
            }

            currentIndex += right;
            
            if(currentIndex > inputLine.length - 1) {
                currentIndex -= inputLine.length;
            }
               
        }
    });
    return treeCounter;
}

let result = move(1, 1) * move(3, 1) * move(5, 1) * move(7, 1) * move(1, 2);
console.log(result);