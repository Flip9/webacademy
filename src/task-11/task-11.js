function pow(x,n) {
    var result = x;
    while (n > 1) {
        result = result * x;
        n--;
    }
    return result;
}

console.log(pow(2,4));




import './task-11.scss';