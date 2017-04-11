// JavaScript File
//each by click event listener
//gets all ids from second html file
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var result = document.getElementById('result');
//click option
one.addEventListener('click', optionOne);
two.addEventListener('click', optionTwo);
three.addEventListener('click', optionThree);


function optionOne(){
    result.innerHTML = "You get 10% off, your total is $90.00";
}
function optionTwo(){
    result.innerHTML = "You get 10% off, your total is $112.5";
}
function optionThree(){
    result.innerHTML = "You get 10% off, your total is $130.00";
}
   