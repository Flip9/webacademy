var arr = [];
var check = true;
var sum = 0;

while ( check === true ) {
    var digit = prompt('Введите число', 0);
    if ( digit === '' ) {
        check = false;
    } else if ( digit === null || isNaN(digit) ) {
        check = false;
    } else {
        arr.push(Number(digit));
    }
}

for ( var i = 0; i < arr.length; i++ ) {
    sum += arr[i];
}

alert(sum);


import './task-8.scss';