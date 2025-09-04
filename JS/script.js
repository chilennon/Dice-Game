
var randomDiceFace1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "images/" + "dice" + randomDiceFace1 + ".svg";

document.querySelector(".player1image").setAttribute("src", randomDiceImage1);


// change second dice image

var randomDiceFace2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/" + "dice" + randomDiceFace2 + ".svg";

document.querySelector(".player2image").setAttribute("src", randomDiceImage2);



// result

if (randomDiceFace1 > randomDiceFace2) {
    document.querySelector(".result").innerHTML = "Player 1 wins";
} else if (randomDiceFace1 < randomDiceFace2) {
    document.querySelector(".result").innerHTML = "Player 2 wins";
} else {
    document.querySelector(".result").innerHTML = "It's a tie!";
}