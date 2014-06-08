(function(){
var lorem = document.getElementById("lorem").innerHTML; //This turns the contents of lorem into an array.
var string = lorem.split(" "); //This splits the p into an array with each word a value in the array. 

var longest_one = ""; 
for (var i =0; i < string.length; i++) {
  if (string[i].length > longest_one.length) {
    longest_one = string[i];
  }

}
console.log(longest_one);
})();
