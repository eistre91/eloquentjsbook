function every(array, f) {
    var testBoolean = true;
    for (var i = 0; i < array.length; i++) {
        testBoolean = testBoolean && f(array[i]);
        if (testBoolean == false) {
            return testBoolean;
        }
    }
    return testBoolean;
}

function some(array, f) {
    var testBoolean = false;
    for (var i = 0; i < array.length; i++) {
        testBoolean = testBoolean || f(array[i]);
        if (testBoolean == true) {
            return testBoolean;
        }
    }
    return testBoolean;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false