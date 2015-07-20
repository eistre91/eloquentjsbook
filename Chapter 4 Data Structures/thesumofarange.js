var range = function(start, end, step) {
    var result = [];
    var temp = 0;
    
    if(typeof step == "string") {
        step = parseInt(step);
    }
    
    if (step < 0 && start < end) {
        temp = start;
        start = end;
        end = temp;
    } else if (step === 0) {
        step = 1;
    } else if (step > 0 && end < start) {
        temp = end;
        end = start;
        start = temp;
    }
    
    if(start < end) {
        for (var i = start; i <= end; i = i + step) {
            result.push(i);
        }
    } else if (end < start) {
        for (var i = start; i >= end; i = i + step) {
            result.push(i);
        }
    }
    return result;
}

var sum = function(numArray) {
    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    return total;
}

console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(1, 10, -1));
console.log(range(10, 1, -1));
console.log(range(10, 1, -2));
console.log(range(10, 1, 1));
