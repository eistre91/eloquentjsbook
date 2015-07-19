var reverseArray = function(array) {
    var newArray = [];
    for(var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

var reverseArrayInPlace = function(array) {
    var temp;
    var lastIndex = array.length - 1;
    for(var i = 0; i < Math.floor(array.length / 2); i++) {
        temp = array[i];
        array[i] = array[lastIndex - i];
        array[lastIndex - i] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(["A", "B", "C", "D"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
var arrayValue2 = [1,2,3,4];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);