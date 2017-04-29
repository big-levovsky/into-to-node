/**
 * Created by Rami L on 29/04/2017.
 */
var request = require('request');

var s = request('http://www.pluralsight.com');

s.on('data', function(chunk) {
   console.log(">>>Data>>> " + chunk);
});

s.on('end', function() {
    console.log(">>>Done!>>>");
});