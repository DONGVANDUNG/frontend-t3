let color = [
    'pink', 'yellow', 'red', 'orange', 'black', 'blue', 'green', 'white', 'brown', 'purple',
];

function changeColor() {
    let background = document.getElementById('container');
    let number_random = Math.floor(Math.random() * color.length)
    background.style.backgroundColor = color[number_random]
}
document.getElementsByClassName('btn')[0].addEventListener('click', changeColor);