import input from './input';

const inputArray = input.split(",").map(Number);

inputArray.forEach(item => {
    for(let i of inputArray) {
        if(item + i == 2020) {
            console.log(item * i);
        }
    }
});
