function caculation() {
    let fistNumber = document.getElementById('number-first').value;
    let secondNumber = document.getElementById('number-second').value;
    let caculation = document.getElementsByName('cal').value;
    if (caculation == 'add') {
        document.getElementsByName('result').placeholder = fistNumber + secondNumber;
    }
    if (caculation == 'minus') {
        document.getElementsByName('result').placeholder = fistNumber - secondNumber;
    }
    if (caculation == 'multiply') {
        document.getElementsByName('result').placeholder = fistNumber * secondNumber;
    }
    if (caculation == 'divide') {
        document.getElementsByName('result').placeholder = fistNumber / secondNumber;
    }
}