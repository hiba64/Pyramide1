const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? ");
var l= rl.question ("> ", function(answer) {
 
  

  rl.close();

if (answer<= 25)
  {console.log("Voici la pyramide :");
    function displayPyramid(answer) {
  for (var i = 0; i < answer; i++) {
    var str = '';
    for (var j = 1; j <answer-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }}
    displayPyramid(answer);
}
});
