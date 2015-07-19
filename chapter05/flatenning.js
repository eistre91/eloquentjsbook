var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce( function (cur1, cur2) {
    return cur1.concat(cur2);
}));

