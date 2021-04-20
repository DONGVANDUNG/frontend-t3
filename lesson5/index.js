function validateInput(inputId) {
    let element = document.getElementById(inputId);

    if (element.value == '') {
        element.style.borderColor = "red";
    }
    else {
        element.style.borderColor = "black";
    }
}

function validate() {
    validateInput('fullname');
    validateInput('email');
    validateInput('phone');
    validateInput('age')
}
setTimeout(function () {
    document.getElementById('nofication').style.bottom = "100px";
}, 10000);
setTimeout(function () {
    document.getElementById('nofication').style.bottom = "-200px";
}, 15000);
setTimeout(function () {
    document.getElementById('nofication').style.left = "100px";
}, 10000)
let register = function (option) {
    let amount = 0;
    document.getElementById('btn-' + option).style.display = "none";
    document.getElementById('amount').innerHTML = ++amount;
}
let secondFlashSale = 2 * 60 * 60;

let changeTimes = function (seconds) {
    let hours = Math.floor(seconds / 3600);
    document.getElementById('hours').innerHTML = "0" + hours;

    let minutes = Math.floor((seconds % 3600) / 60);

    if (minutes < 10) {
        document.getElementById('minutes').innerHTML = "0" + minutes;
    }
    else {
        document.getElementById('minutes').innerHTML = minutes;
    }

    let second = seconds - hours * 3600 - minutes * 60;

    if (second < 10) {
        document.getElementById('second').innerHTML = "0" + second;
    }
    else {
        document.getElementById('second').innerHTML = second;
    }

}

setInterval(function () { changeTimes(--secondFlashSale) }, 1000);
