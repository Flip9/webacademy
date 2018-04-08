var salaries = {
    John: 400,
    Jack: 20000,
    test: "sdfweefsdv",
};


function calc(salaries) {
    var amount = 0;
    var nClass;
    for ( var key in salaries) {
        nClass = salaries[key];
        if ((typeof nClass) === 'number') {
            amount = amount + nClass;
        }
    };
    if (amount == undefined) {
        amount = 0;
    }
    return amount;
}

console.log(calc(salaries));

import './task-4.scss';