var redScore = 0;
var greenScore = 0;

var redSquare = $('#red-div');
var greenSquare = $('#green-div');


redSquare.click(function(){
  redScore += 1;
  console.log(redScore);
});
greenSquare.click(function(){
  greenScore += 1;
  console.log(greenScore);
});