var firstrandom1 = Math.random();
var n = (firstrandom1*6)+1;
var randomNumber1 = Math.floor(n);
var new_img1 = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",new_img1);
var firstrandom2 = Math.random();
var n = (firstrandom2*6)+1;
var randomNumber2 = Math.floor(n);
var new_img2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",new_img2);
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 win &#127881";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 win &#127881";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="draw &#127881";
}