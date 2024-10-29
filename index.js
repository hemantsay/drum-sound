// alert("hello");

var noofButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < noofButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {



        var buttoninnerHtml = this.innerHTML;
        makeSound(buttoninnerHtml);
         buttonAnimation(buttoninnerHtml);

       



    })



}


    document.addEventListener("keypress", function(event) {

        makeSound(event.key);
         buttonAnimation(buttoninnerHtml);

    })

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var atom4 = new Audio("./sounds/tom-4.mp3");
            atom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttoninnerHtml);
            

}
}

function buttonAnimation(currentKey){
    var activeButton =  document.querySelector("."+ currentKey);
    activeButton.classList.add("drumm");
    setTimeout(function(){
        activeButton.classList.remove("drumm");
    }, 100);

    
}
