// JavaScript File
// gets id from html file
var first = document.getElementById("one");

var third = document.getElementById("three");
var answer = document.getElementById("answer");
var option =document.getElementById("yes");
var promo = document.getElementById("promo");
first.addEventListener("click",optionOne);
third.addEventListener("click",optionThree);
//functions for the options 
function optionOne(){
    
    answer.innerHTML = "You chose the Basic Membership. Total: $50.00";
}
 function optionThree(){
     
     answer.innerHTML ="You get a 10% dscount, Total : $90.00"
 }