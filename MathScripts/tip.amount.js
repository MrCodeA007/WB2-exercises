//sample input 
var hamburger = 12;
var fries = 3;
var soda = 4;
var tip = 10;

//calculations
var bill = hamburger + fries + soda;
var tipPer = bill % tip;
//output 
console.log("The tip on a " + bill + " food bill is " + tipPer) 