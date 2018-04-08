var salaries = {
    John: 400,
    Jack: 20000,
    test: "sdfweefsdv",
};


function calc(salaries) {
    for ( var key in salaries) {
        if ((typeof salaries[key]) === 'number') {
            salaries[key] = salaries[key] * 2;
        }
    };

    return  salaries;
}

console.log(calc(salaries));

import './task-6.scss';