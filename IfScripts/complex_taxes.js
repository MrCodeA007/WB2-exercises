var payRate = 25;
var hoursWorked = 45;
var overtimeThreshold = 40;
var filingstatus = "single";
var grossPay = payRate * hoursWorked;
var overtimeHours = hoursWorked - overtimeThreshold;
var overtimeRate= payRate * 1.5;
var grossweeklyPay;
if (hoursWorked <= overtimeThreshold) {
    grossweeklyPay = hoursWorked * overtimeThreshold
    console.log("gross pay is", payRate * hoursWorked)
} else {
    var basePay = payRate * overtimeThreshold;
    var overtimepay = overtimeHours * overtimeRate;
    grossweeklyPay = basePay + overtimepay;
}


//grossWeeklyPay
var grossAnnualPay = grossweeklyPay * 52;;
var taxRate;
if (filingstatus == "single") {
if (grossAnnualPay < 12000) {
    taxRate = .05;
} else if (grossAnnualPay <25000) {
taxRate = .1
} else if (grossAnnualPay < 75000) {
    taxRate = .15
} else {
    taxRate = .2
}
} else if (filingstatus == "joint"){

} else{

}

var weeklyTaxWithheld = grossweeklyPay * taxRate;
var netPay = grossweeklyPay - weeklyTaxWithheld;

console.log(`You worked ${hoursWorked} hours this period`);
console.log(`Because you earn ${payRate} per hour, your gross pay is ${grossweeklyPay}`);
console.log(`Your filing status is ${filingstatus}`);
console.log(`Your tax withholding this period is ${weeklyTaxWithheld}`);
console.log(`Your net pay is ${netPay.toFixed(2)}`);