
/*  Rock-Paper=Paper
    Rock-Sissors=Rock
    Paper-Rock=Paper
    Paper-Sissors=Sissors
    Sissors-Rock=Rock
    Sissors-paper=Sissors
*/
var player1=prompt("Enter Rock or Paper or Sissors\nPlayer1");
console.log(player1);
var player2=prompt("Enter Rock or Paper or Sissors\nPlayer2");
console.log(player2);
if(player1==="Rock" && player2==="Paper"  ){
    alert("Player2 Win");
}
else if(player1==="Rock"&&player2==="Sissors"){
    alert("Player1 Wins");
} 
else if(player1==="Paper"&&player2==="Rock"){
    alert("Player1 Win")
}
else if(player1==="Paper"&&player2==="Sissors"){
    alert("PLayer2 Win ");
}
else if(player1==="Sissors"&&player2==="Rock"){
    alert("Player2 Win");
}
else if(player1==="Sissors"&&player2==="Paper"){
    alert("Player1 Win");
}
else if(player1===player2){
    alert("It's tie"); 
}