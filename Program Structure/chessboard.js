var val = " ";
var size = 10;
var line = val;

for(var i = 1; i <= size*size; i++) {
    line = val + line;
    if ( i % size === 0 && size % 2 === 0 ) {
        line = "\n" + line;
    } else if ( i % size === 0 && size % 2 !== 0 ) {
        line = "\n" + line;
        val = (val === " " ? val = "#" : val = " ");
    } else {
        val = (val === " " ? val = "#" : val = " ");
    }
}

console.log(line);