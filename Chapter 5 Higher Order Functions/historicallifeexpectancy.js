var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function Century(totalYears, totalRelatives) {
    this.totalYears = totalYears;
    this.totalRelatives = totalRelatives;
}

var centuryStats = {};

function age(person) {
    return person.died - person.born;
}

function calculateCentury (person) {
    return Math.ceil(person.died/100);
}

for(var i = 0; i < ancestry.length; i++) {
    century = calculateCentury(ancestry[i]);
    if (centuryStats[century] == undefined) {
        centuryStats[century] = new Century(age(ancestry[i]), 1); 
    } else {
        centuryStats[century].totalYears += age(ancestry[i]);
        centuryStats[century].totalRelatives++;
    }
}

for(var century in centuryStats) {
    console.log(century + ": " + centuryStats[century].totalYears/centuryStats[century].totalRelatives);
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

//Alternate solution

//return group names mapped to group members
function groupBy(array, f) {
    var groupName;
    var groups = {};
    for(var i = 0; i < array.length; i++) {
        groupName = f(array[i]);
        if (groups[groupName] == undefined) {
            groups[groupName] = new Array();
        }
        groups[groupName].push(array[i]);
    }
    return groups;
}

var centuryGroups = groupBy(ancestry, calculateCentury);

for(var century in centuryGroups) {
    var ageArray = [];
    for (var j = 0; j < centuryGroups[century].length; j++) {
        ageArray.push(age(centuryGroups[century][j]));
    }
    console.log(century + ": " + average(ageArray));
}