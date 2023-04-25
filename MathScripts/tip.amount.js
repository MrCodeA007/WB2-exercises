//sample input 
var hamburger = 12;
var fries = 3;
var soda = 4;
var tipPer = 0.15;
// 15% tip is o.15

//calculations
var bill = hamburger + fries + soda;
var tipAmount= bill * tipPer;

//output 
console.log("The tip on a " + bill.toFixed(2) + " food bill is " + tipAmount) 