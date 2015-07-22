var http = require("http");
var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/author",
  method: "GET",
  headers: {Accept: "text/html"}
}, function(response) {
  readStreamAsString(response, console.log);

});
request.end();

/*  request.on("data", function(chunk) {
    response.write(chunk.toString().toUpperCase());
  });*/

request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/author",
  method: "GET",
  headers: {Accept: "text/plain"}
}, function(response) {
  readStreamAsString(response, console.log);
});
request.end();

request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/author",
  method: "GET",
  headers: {Accept: "application/json"}
}, function(response) {
  readStreamAsString(response, console.log);
});
request.end();

function readStreamAsString(stream, callback) {
  var data = "";
  stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
    callback(null, data);
  });
  stream.on("error", function(error) {
    callback(error);
  });
}
/*Do this again, using Node’s http.request function. 
Ask for at least the media types text/plain, text/html, and application/json.
Remember that headers to a request can be given as an object, 
in the headers property of http.request’s first argument.*/