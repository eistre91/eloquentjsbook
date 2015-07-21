//var mountains = require("./mountains.js");
//console.log(mountains);

console.log(document.body);

function buildTable(data) {
    var tableNode = document.createElement("table");
    var headerRowNode = document.createElement("tr");
    tableNode.appendChild(headerRowNode);
    console.log(Object.keys(data[0]));
    for(var i = 0; i < Object.keys(data[0]).length; i++) {
        var tableHeaderCells = document.createElement("td");
        headerRowNode.appendChild(tableHeaderCells);
        var tableHeader = document.createTextNode(Object.keys(data[0])[i]);
        tableHeaderCells.appendChild(tableHeader);
        console.log(tableHeader);
    }
    for(var j = 0; j < data.length; j++) {
        var newRow = document.createElement("tr");
        tableNode.appendChild(newRow);
        for(var key in data[j]) {
            if (data[j].hasOwnProperty(key)) {
                var tableDataTag = document.createElement("td");
                newRow.appendChild(tableDataTag);
                var tableData = document.createTextNode(data[j][key]);
                if (typeof data[j][key] === "number") {
                    tableDataTag.style.textAlign = "right";
                }
                tableDataTag.appendChild(tableData);
            }
        }
    }
        console.log("run");
    return tableNode;
}

document.body.appendChild(buildTable(mountains));
