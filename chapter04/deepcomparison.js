//if typeof both values is object then call deepEqual again
//if typeof both is not object, then compare with ===
var deepEqual = function(compare1, compare2) {
    var testBoolean = true;
    if(compare1 == null || compare2 == null) {
        return compare1 == compare2;
    } else if ( typeof compare1 == "object" && typeof compare2 == "object" ) {
        for (var prop1 in compare1) {
            if (!compare2.hasOwnProperty(prop1)) { return false; }
            for (var prop2 in compare2) {
                if (!compare1.hasOwnProperty(prop2)) { return false; }
                testBoolean = deepEqual(compare1[prop1], compare2[prop1]) && deepEqual(compare1[prop2], compare2[prop2]) && testBoolean;
            }
        }
    } else {
        return compare1 === compare2;
    }
    return testBoolean;
}

/*        for (var prop1 in compare1) {
            if (!compare2.hasOwnProperty(prop1)) { return false; }
            for (var prop2 in compare2) {
                if (!compare1.hasOwnProperty(prop2)) { return false; }
                return deepEqual(compare1.prop1, compare2.prop2);
            }
        }*/

console.log(typeof null);
console.log(null);
console.log(1 == null);
console.log({} == null);
console.log(typeof {});

var obj = {here: {is: "an", another: {another: "asdf"}}, object: {two: 2, apples: {two: 2}}};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", another: {another: "asdf"}}, object: {two: 2, apples: {two: 2}}}));
// → true