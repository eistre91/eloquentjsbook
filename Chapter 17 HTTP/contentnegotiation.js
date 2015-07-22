require('http');

function sendGetRequest(url, mediaType) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.setRequestHeader("Accept: " , mediaType);
    req.send(null);
    return req.responseText;
}

var eloquentURL = "http://eloquentjavascript.net/author"

console.log(sendGetRequest(eloquentURL, "text/plain"));
console.log(sendGetRequest(eloquentURL, "text/html"));
console.log(sendGetRequest(eloquentURL, "application/json"));
console.log(sendGetRequest(eloquentURL, "application/rainbows+unicorns"));