// creating random number variable for random imgaes
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// picking random image
var random_dice1 = "dice" + randomNumber1 + ".png";
var random_dice2 = "dice" + randomNumber2 + ".png";
// attaching root files of dicce folder 
var randomImg1 = "/dicee game" + "/images/" + random_dice1;
var randomImg2 = "/dicee game" + "/images/" + random_dice2;

// set attribute for displaying random images..
document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

// displaying winner name........


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "😍player1 is winner!";

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "😁player2 is winner!";
}
else{
    document.querySelector("h1").innerHTML = "🥴 DRAW!";
}
