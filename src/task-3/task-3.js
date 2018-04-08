var obj = {
    name: "Вася"
};


function isEmpty(obj) {
    var nClass = 0;
    for ( var key in obj) {
        nClass++;
    };
    if (nClass > 0) {
        return true;
    } else {
        return false;
    };
}

console.log(isEmpty(obj));

import './task-3.scss';