var countChar = function(testString, char) {
    var total = 0;
    for (var i = 0; i < testString.length; i++) {
        if ( testString.charAt(i) === char ) {
            total++;
        }
    }
    return total;
}

console.log(countChar("asdfasdfasdfa", "a"));
console.log(countChar("BasdfBall", "B"));
console.log(countChar("BBBB", "B"));