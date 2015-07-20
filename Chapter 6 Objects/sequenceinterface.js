//Generalized iteration interface requires
    //Length of object to iterate over - length
    //A way to get the next element - next()
    //A way to check if we're at the end of iteration - endOfSeq
    
//undefined/not-passed-in howMany specifies iterate to end of sequence
function iterateOver(seq, howMany) {
    howMany = typeof howMany !== 'undefined' ? howMany : seq.length;
    var result = [];
    for(var i = 0; i<howMany; i++) {
        if (seq.endOfSeq()) {
            break;
        }
        var temp = seq.next();
        result.push(temp);
    }
    return result;
}
    
function ArraySeq(array) {
    this.array = array;
    var current = 0;
    
    this.next = function() {
        if (current < this.array.length) {
            current++;
            return this.array[current-1];
        } else {
            return undefined;
        }
    }
/*    this.prev = function() {
        var tempValue = this.array[current];
        current--;
        return tempValue;
    }*/
    this.currentValue = function() {
        return this.array[current];
    }
    this.endOfSeq = function() {
        return current == this.array.length;
    }
}
Object.defineProperty(ArraySeq.prototype, "length", {
    get: function() { return this.array.length; }
});

//Could extend this to be more robust having a lesser value first
function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    var current = from;
    this.next = function() {
        if (current != this.to) {
            current++;
            return current-1;
        } else {
            return undefined;
        }
    }
    this.endOfSeq = function() {
        return current == this.to;
    }
}
Object.defineProperty(RangeSeq.prototype, "length", {
    get: function() {return this.from-this.to;}
});

function logFive(seq) {
    var iteration = iterateOver(seq, 5);
    for(var i = 0; i<5; i++) {
        if (iteration[i] != undefined) {
            console.log(iteration[i]);
        } else {
            break;
        }
    }
}
    

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104