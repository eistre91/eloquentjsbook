var isEven = function(number) {
    if (number < 0) {
        number = number * -1;    
    }
    
    if (number === 1) {
        return "odd";
    } else if (number === 0) {
        return "even";
    } else {
        return isEven(number-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-4));