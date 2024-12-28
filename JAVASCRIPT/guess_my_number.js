var goal=Math.floor(Math.random()*100);
var goalNum=Number(goal);
alert(goalNum);
do{
    var input=prompt("Guess number between 0 and 100");
var guessNum=Number(input);
}while(guessNum!=goalNum);
alert("Yor guess number "+goalNum+ " is correct");
