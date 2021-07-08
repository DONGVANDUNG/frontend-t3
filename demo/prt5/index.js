let number = 0;

function changeIncreaseNumber() {
    number += 1;
    document.getElementsByClassName('number')[0].innerHTML = number;
    console.log(document.getElementsByClassName('number'))
}

function changeDecreaseNumber() {
    number -= 1;
    document.getElementsByClassName('number')[0].innerHTML = number;
}
document.getElementsByClassName('lower')[0].addEventListener('click', changeDecreaseNumber);
document.getElementsByClassName('add')[0].addEventListener('click', changeIncreaseNumber);