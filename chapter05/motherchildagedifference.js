var ancestry = require("./ancestry.js");

console.log(ancestry);
console.log(typeof ancestry);

ancestry = JSON.parse(ancestry);

console.log(ancestry);
console.log(typeof ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["asdf"]);

var calculateDiff = function(mother, child) {
    return child.born - mother.born;
}

var motherChildDiff = [];
for(var i = 0; i < ancestry.length; i++) {
   if (byName[ancestry[i].mother] != undefined) {
       motherChildDiff.push(calculateDiff(byName[ancestry[i].mother], ancestry[i]));
   }
}
console.log(average(motherChildDiff));