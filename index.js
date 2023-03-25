for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", sound);
function sound(){
var buttoninnerhtml= this.innerHTML;
   makesound(buttoninnerhtml);
   Animation(buttoninnerhtml);                        
}

} 
document.addEventListener("keypress", function(event){
makesound(event.key);
Animation(event.key);
});

function makesound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
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
      var kicbass = new Audio('sounds/kick-bass.mp3');
      kicbass.play();
      break;
      case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
      case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      break;
  }
}
function Animation(currentkey){
var activebutton= document.querySelector("." + currentkey);   // current key will return w,a,... from both button and key word and dot to get access to class i.e w drum in html
activebutton.classList.add("pressed");  // a new class is .presseed is created and modify in css 
// now adding time out function for pressed class
setTimeout(function(){
activebutton.classList.remove("pressed");
},100);//time in milisec
}
