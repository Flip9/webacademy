function getLocalDay(date) {
    var day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}
var date = new Date(2012, 0, 3);
console.log(getLocalDay(date));


import './task-14.scss';