// Script for the Mixed Messages project

// function to return random index in length of array
const randomIndex = arr => Math.floor(Math.random()*arr.length);

// defining message parts
const part1 = [
    'If you want',
    'Something you should think about is',
    'Really all there is to life is chocolate',
    'All signs point to the road less travelled, so',
    'If you ever wanted to step up'
];

const part2 = [
    'try starting a book',
    'start exercising more',
    'look at your phone less',
    'go see a pal',
    'drink more water'
];

const part3 = [
    'on a boat',
    'in your home',
    'on top of a car',
    'inside the smallest box you can fit in',
    'next to a dog'
];

// Put it together and print
console.log(`${part1[randomIndex(part1)]}, ${part2[randomIndex(part2)]} ${part3[randomIndex(part3)]}.`);