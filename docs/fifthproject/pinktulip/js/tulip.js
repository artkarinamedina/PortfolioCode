// JavaScript File

var fadeStart = 0;
var fadeOut = 10;
//function to fade out 

function fadeout() {
    var div = document.getElementById('aware');

    var newSetting = fadeOut / 10;
    div.style.opacity = newSetting;
    fadeOut--;

    if (fadeOut == 0) {
        div.style.opacity = 0;
        fadeOut = 10;

    }
   


    setTimeout('fadeout()', 300);


}

fadeout();
