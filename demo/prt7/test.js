function change() {
    let result = document.getElementById('input').value;
    let output = document.getElementsByClassName('output');
    console.log(result)
    if (result === "") {
        output[0].innerHTML = 'Input is empty';
    }
    output[0].innerHTML = result;
}
document.getElementsByClassName('btn')[0].addEventListener('click', change);