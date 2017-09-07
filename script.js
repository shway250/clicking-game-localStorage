var redScore = 0;
var greenScore = 0;

var redSquare = document.getElementById('red-div');
var greenSquare = document.getElementById('green-div');

redSquare.addEventListener("click",function(){
  redScore += 1;
  console.log(redScore);
});
greenSquare.addEventListener("click",function(){
  greenScore += 1;
  console.log(greenScore);
});