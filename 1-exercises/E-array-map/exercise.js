// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//method 1
function x100 (number){
    return number * 100;
}

let multiplied100 = numbers.map(x100);

console.log('method 1 - ' + multiplied100);

//method 2
let multiplied100_2 = numbers.map(function x100_2 (number) {
    return number * 1000;
})

console.log('\nmethod 2 - ' + multiplied100_2);

//method 3
let multiplied100_3 = numbers.map(function (number) {
    return number * 10000;
})

console.log('\nmethod 3 - ' + multiplied100_3);

//method 4
let multiplied100_4 = numbers.map(number => {
    return number * 100000;
})

console.log('\nmethod 4 - ' + multiplied100_4);

//method 5
let multiplied100_5 = numbers.map(number => number * 1000000);

console.log('\nmethod 5 - ' + multiplied100_5);
