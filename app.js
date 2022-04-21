var diceNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber2 = Math.floor(Math.random() * 6) + 1;


var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");


var newImageAddress1 = "images/dice"+ diceNumber1 + ".png";
var newImageAddress2 = "images/dice"+ diceNumber2 + ".png";


img1.setAttribute("src", newImageAddress1);
img2.setAttribute("src", newImageAddress2);


var h1 = document.querySelector("h1");

if(diceNumber1 > diceNumber2){
    h1.innerHTML = "Player 1 Wins";

}
else{
    h1.innerHTML = "Player 2 Wins";
}