// JavaScript File
//get ids from html
var hours = document.getElementById('hours');
var perHour = document.getElementById('perhour');
var taxRate = document.getElementById('taxrate');
var submit = document.getElementById('btn');

var displayGross = document.getElementById('gross-pay');
var displayOverTime = document.getElementById('over-time');
var displayTotal = document.getElementById('total');
var displayTax = document.getElementById('tax-amount');
var displayNet = document.getElementById('net-pay');

submit.addEventListener('click', employeePay);

function employeePay() {
    employeeName();
    netPayTotal();


}

function employeeName() {
    var name = document.getElementById('name').value;
    var displayName = document.getElementById('employee-name');
    displayName.innerHTML = 'Employee Name:' + name;
}

//function to calculate the gross pay and net pay
//if and else statements are used
function netPayTotal() {
    var hoursOne = parseFloat(hours.value) || 0;
    var perHourTwo = parseFloat(perHour.value) || 0;
    var taxRateThree = parseFloat(taxRate.value) || 0;
    if (hoursOne <= 40) {
        var grossPay = hoursOne * perHourTwo;
        displayGross.innerHTML = 'Gross Pay:$  ' + grossPay;
        if (taxRateThree == '22') {
            var net = grossPay * .22;
            var netPay = grossPay - net;
            displayNet.innerHTML = 'Net Pay:$  ' + netPay;
        }
        else if (taxRateThree == "18") {
            net = grossPay * .18;
            netPay = grossPay - net;
            displayNet.innerHTML = 'Net Pay: ' + netPay;
        }

    }
    else if (hoursOne > 40) {
        var hoursOverTime = hoursOne - 40;
        var PerHourOverTime = perHourTwo * 1.5;
        var grossPaytwo = 40 * perHourTwo;
        var totalOverTime = hoursOverTime * PerHourOverTime;
        var total = grossPaytwo + totalOverTime;
        displayGross.innerHTML = 'Gross Pay: ' + grossPaytwo;
        displayOverTime.innerHTML = 'Overtime: ' + totalOverTime;
        displayTotal.innerHTML = 'Gross Pay + Overtime: ' + total;
        if (taxRateThree == '22') {
            net = total * .22;
            netPay = total - net;
            displayNet.innerHTML = 'Net Pay:$  ' + netPay;
        }
        else if (taxRateThree == "18") {
            net = total * .18;
            netPay = total - net;
            displayNet.innerHTML = 'Net Pay:$  ' + netPay;
        }
    }



}
