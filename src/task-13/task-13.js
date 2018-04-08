function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
}

var date = new Date(2014, 0, 3);
console.log(getWeekDay(date));

import './task-13.scss';