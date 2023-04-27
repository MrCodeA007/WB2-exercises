/*var payrate = 12.50;
var hoursWorked = 20;
var overtime = hoursWorked-40;

if (hoursWorked > 40) {
(payrate * 40) + (overtime * 1.5)
else
}

console.log(overtime)*/
//----------------------------------------------------------------------------------------
var payRate = 25;
var hoursWorked = 45;
var overtimeThreshold = 40;

var grossPay = payRate * hoursWorked;
var overtimeHours = hoursWorked - overtimeThreshold;
var overtimeRate= payRate * 1.5;

if (hoursWorked <= overtimeThreshold) {
    console.log("gross pay is", payRate * hoursWorked)
} else {
    var overtimepay = overtimeHours * overtimeRate;
    var basePay = payRate * overtimeThreshold;
    console.log("gross pay is", basePay +overtimepay)
}


console.log("hours worked", hoursWorked);
console.log("overtime hours", overtimeHours);
console.log("base rate", payRate)
