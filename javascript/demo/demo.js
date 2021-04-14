function caculation() {
    let fistNumber = document.getElementById('number-first').value;
    let secondNumber = document.getElementById('number-second').value;
    let caculation = document.getElementsByName('cal');
    for (let i = 0; i < caculation.length; i++) {
        if (caculation[i].checked) {
            switch (caculation[i]) {
                case "add":
                    document.document.getElementById('result').value = fistNumber + secondNumber;
                    break;
                case "minus":
                    document.document.getElementById('result').value = fistNumber - secondNumber;
                    break;
                case "multiply":
                    document.document.getElementById('result').value = fistNumber * secondNumber;
                    break;
                case "divide":
                    document.document.getElementById('result').value = fistNumber / secondNumber;
                    break;
            }
        }
    }
}