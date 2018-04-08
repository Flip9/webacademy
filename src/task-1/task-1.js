const min = 1;
const max = 5;
var random;

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

random = randomInteger(min, max);
console.log(random);




import './task-1.scss';