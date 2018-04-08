var salaries = {
    John: 400,
    Jack: 20000,
    test: "sdfweefsdv",
};


function calc(salaries) {
    var mostSalaryName; //имя работника с самой большой зарплатой
    var nClass;
    var salary = 0; // размер самой большой зарплаты
    var workers = 0; // количество работников
    for ( var key in salaries) {
        workers++;
        nClass = salaries[key];
        if ((typeof nClass) === 'number') {
            if (nClass > salary) {
                salary = nClass;
                mostSalaryName = key;
            }
        }
    };
    if (workers === 0) {
        mostSalaryName = "нет сотрудников";
    }

    return  mostSalaryName;
}

console.log(calc(salaries));

import './task-5.scss';