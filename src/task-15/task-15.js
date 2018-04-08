function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

var date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1));

import './task-15.scss';