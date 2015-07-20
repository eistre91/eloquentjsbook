// '(\b[\w]+'?[\w\s,]+\b[,.])'

var text = "'I'm the cook,' he said, 'it's my's job.'";
// Change this call.
console.log(text.replace(/'(\b[\w\s'?]+\b[,.])'/g, "\"$1\""));
// → "I'm the cook," he said, "it's my job."