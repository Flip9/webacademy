const arr = [1,2,3,4,5,6,7];

function filterRange(arr, a, b) {
    var range = [];
    for (var i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) {
            range.push(arr[i]);
        }
    }
   return(range);
}

console.log(filterRange(arr, 3, 5));



import './task-10.scss';