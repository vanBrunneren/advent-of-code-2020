import input from './input';

const inputArray = input.split(",").map(Number);

for(let firstInput of inputArray) {
    for(let secondInput of inputArray) {
        for(let thirdInput of inputArray) {
            if(firstInput + secondInput + thirdInput === 2020) {
                console.log(firstInput * secondInput * thirdInput);
            }
        }
    }
}