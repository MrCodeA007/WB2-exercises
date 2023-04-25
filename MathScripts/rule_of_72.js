//sample input
var savingsAccount = 100000;
var interestRate = 15;

//calculations
var Ruleof72 = 72/interestRate;
var dblSavings= savingsAccount * 2;
//output
console.log("At a " + interestRate + " interest rate, your savings account will be worth " + dblSavings.toFixed(2) + " in " + Ruleof72 + " years ")