var redScore = 0;
var greenScore = 0;
var redSquare = $('#red-div');
var greenSquare = $('#green-div');
var redHighScore = $("#redHighScore");
var greenHighScore = $("#greenHighScore");
//make sure local storage variable is initiated.
//this is actually a pretty good use of the == instead of ===
if(localStorage.yellow == false){
  localStorage.yellow = 0;
}
if(localStorage.blue == false){
  localStorage.blue = 0;
}
function increaseScore(event){
  event.data.param1 += 1;
  if(event.data.param2 === redSquare && event.data.param1 >= localStorage.red){
    localStorage.red = event.data.param1;
  }else if(event.data.param2 === greenSquare && event.data.param1 >= localStorage.green){
    localStorage.green = event.data.param1;
  }
  redHighScore.text(localStorage.red);
  greenHighScore.text(localStorage.green);
  event.data.param2.empty()
  event.data.param2.append("<h2>"+event.data.param1+"</h2>")
}

redSquare.click({param1: redScore, param2: redSquare}, increaseScore);
greenSquare.click({param1: greenScore, param2: greenSquare}, increaseScore);
redHighScore.text(localStorage.red);
greenHighScore.text(localStorage.green);