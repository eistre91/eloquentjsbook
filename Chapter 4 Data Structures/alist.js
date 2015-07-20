var arrayToList = function(array) {
    var currentListItem;
    var lastListItem = null;
    for(var i = array.length - 1; i >= 0; i--) {
        currentListItem = { value: array[i], rest: lastListItem };
        lastListItem = currentListItem;
    }
    return currentListItem;
}

var listToArray = function(list) {
    var currentListItem = list;
    var newArray = [];
    while (currentListItem.rest != null) {
        newArray.push(currentListItem.value);
        currentListItem = currentListItem.rest;
    }
    newArray.push(currentListItem.value);
    return newArray;
}

var prepend = function(val, list) {
    return { value: val, rest: list };
}

var nth = function(list, position) {
    if(position >= 1 && list.rest == null) {
        return undefined;
    } else if (position === 0) {
        return list.value;
    }
    return nth(list.rest, position-1);
}

console.log(arrayToList([10, 20]));
console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70, 80, 90]), 4));

