

var lorem = document.getElementById("lorem").innerHTML; //This turns the contents of lorem into an array.
var string = lorem.split(" "); //This splits the p into an array with each word a value in the array.

string.sort(function(a,b) {
  return b.length - a.length

})

console.log(string[0]);

