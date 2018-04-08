var arr = [1, 5, 'test', 'Jack', 7];
function find(arr,value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;
}

console.log(find(arr,'test'));



import './task-9.scss';