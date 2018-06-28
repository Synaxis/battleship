var location1 = 3;
var location2 = 4;
var location3 = 5;

var Userguess; //so  tera um valor quando o usuario definir.
var hits = 0; //contador
var guesses = 0; //contador
var isSunk = false; //bool

while (isSunk == false) {
  Userguess = prompt("Enter a number from  1 to 6");

  if(Userguess < 0 || Userguess > 6){
    alert("Only from 1 to 6!");
  }
  else{
    guesses = guesses + 1;
  }
  if(Userguess == location1 || Userguess == location2 || Userguess == location3){
    alert("HIT");
    hits = hits + 1;
      if(hits == 3){
        isSunk = true;
        alert("You took the ship down!");
      }
    }
    else{
      alert("YOU MISSED");
    }
}
var stats = "You used " + guesses + " to take down the ship";
alert(stats);
