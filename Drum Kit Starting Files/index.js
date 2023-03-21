// document.querySelectorAll("button")[0].addEventListener("click" ,arrowclick);
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click" ,sound1);
}
function sound1(){
    var x = this.innerHTML;
    sound(x);
    animation(x);
}
function sound(x){
 
   switch (x) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        
        break;
   
    case "a":
        var tom2= new Audio('sounds/tom-2.mp3');
        tom2.play();
        
        break;
   
    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();        
        break;
   
    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        
        break;
   
    case "j":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        
        break;
   
    case "k":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
   
    case "l":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
   
   
   }

}
document.addEventListener("keydown",function(event){
     var a= event.key;
     sound(a);
     animation(a);
     
});
function animation(key)
{
     document.querySelector("."+key).classList.add("pressed");
     setInterval(function(){     document.querySelector("."+key).classList.remove("pressed");
    },100);
    
}





//var audio= new Audio('sounds/tom-1.mp3');
// audio.play();