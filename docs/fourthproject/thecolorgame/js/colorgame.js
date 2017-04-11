// JavaScript File
var squares = document.querySelectorAll(".square");
var displayRGB = document.getElementById("displayRGB");
var numberSquares = 6;
var differentColors = generateDifferentColors(numberSquares);
var colorPicked = pickedColor();
var messageMiddle = document.getElementById("try");


//new color button.
document.getElementById("color").addEventListener("click", myFunctionReset);

function myFunctionReset() {
    numberSquares = 6;
    differentColors = generateDifferentColors(numberSquares);
    colorPicked = pickedColor();
    displayRGB.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = differentColors[i];
        squares[i].addEventListener("click", function() {
            var clickedcolor = this.style.background;
            if (colorPicked === clickedcolor) {
                messageMiddle.textContent = "Correct";
                changeColors(colorPicked);
            }
            else {
                messageMiddle.textContent = "Wrong, Try Again";
            }

        });

    }
}
document.getElementById("hard").addEventListener("click", myFunctionsix);

function myFunctionsix() {
    numberSquares = 6;
    differentColors = generateDifferentColors(numberSquares);
    colorPicked = pickedColor();
    displayRGB.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = differentColors[i];
        squares[i].addEventListener("click", function() {
            var clickedcolor = this.style.background;
            if (colorPicked === clickedcolor) {
                messageMiddle.textContent = "Correct";
                changeColors(colorPicked);
            }
            else {
                messageMiddle.textContent = "Wrong, Try Again";
            }

        });

    }
}
document.getElementById("easy").addEventListener("click", myFunctionthree);

function myFunctionthree() {

    numberSquares = 3;
    differentColors = generateDifferentColors(numberSquares);
    colorPicked = pickedColor();
    displayRGB.textContent = colorPicked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = differentColors[i];
        squares[i].addEventListener("click", function() {
            var clickedcolor = this.style.background;
            if (colorPicked === clickedcolor) {
                messageMiddle.textContent = "Correct";
                changeColors(colorPicked);
            }
            else {
                messageMiddle.textContent = "Wrong, Try Again";
            }



        });

    }
}
//removes the bottom squares
document.getElementById("easy").addEventListener("click", myFunctionclear);

function myFunctionclear() {
    document.getElementById("one").classList.remove("square");
    document.getElementById("two").classList.remove("square");
    document.getElementById("three").classList.remove("square");
}
//adds the bottom squares
document.getElementById("hard").addEventListener("click", myFunctionadd);

function myFunctionadd() {
    document.getElementById("one").classList.add("square");
    document.getElementById("two").classList.add("square");
    document.getElementById("three").classList.add("square");
}
document.getElementById("color").addEventListener("click", myFunctionaddagain);

function myFunctionaddagain() {
    document.getElementById("one").classList.add("square");
    document.getElementById("two").classList.add("square");
    document.getElementById("three").classList.add("square");
}
document.getElementById("color").addEventListener("click", myFunctionmess);

function myFunctionmess() {
    messageMiddle.textContent = "";;
}
document.getElementById("hard").addEventListener("click", myFunctionmessa);

function myFunctionmessa() {
    messageMiddle.textContent = "";;
}
document.getElementById("easy").addEventListener("click", myFunctionmessb);

function myFunctionmessb() {
    messageMiddle.textContent = "";;
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
//sets the color to the top,rgb
function pickedColor() {
    var random = Math.floor(Math.random() * differentColors.length);
    return differentColors[random];
}
//grabs the randomrgb function to add random color to squares
function generateDifferentColors(num) {

    var arrays = [];

    for (var i = 0; i < num; i++) {

        arrays[i] = randomrgb();
    }

    return arrays;
}
//random colors, using math random 
function randomrgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

// JavaScript File