let array = [{
        image: 'iphone1.jpg',
        name: 'iphone1',
        favourite: 'Beautifull'
    },
    {
        image: 'iphone2.jpg',
        name: 'iphone2',
        favourite: 'Sucessfully'
    },
    {
        image: 'iphone3.jpg',
        name: 'iphone3',
        favourite: 'Prettygood'
    },
    {
        image: 'iphone4.jpg',
        name: 'iphone4',
        favourite: 'Good'
    }
]
let variableRun = -1;
let nextItem = document.getElementsByClassName('next')[0];
let prevItem = document.getElementsByClassName('prev')[0];
nextItem.onclick = function() {
    variableRun++;
    if (variableRun == 0) {
        variableRun = 1;
    }
    if (variableRun == array.length) {
        variableRun = 0;
    }
    document.getElementsByClassName('images')[0].style.backgroundImage = `url('/images1/${array[variableRun].image}')`;
    document.getElementsByClassName('name-images')[0].innerHTML = `${array[variableRun].name}`;
    document.getElementsByClassName('favourite')[0].innerHTML = `${array[variableRun].favourite}`;
    document.getElementsByClassName('images')[0].animate([{ transform: 'translateY(-50px)' }, { transform: 'translateY(0)' }], { duration: 500 });

}
prevItem.onclick = function() {
    variableRun--;
    if (variableRun == -1) {
        variableRun = array.length - 1;
    }
    document.getElementsByClassName('images')[0].style.backgroundImage = `url('/images1/${array[variableRun].image}')`;
    document.getElementsByClassName('name-images')[0].innerHTML = `${array[variableRun].name}`;
    document.getElementsByClassName('favourite')[0].innerHTML = `${array[variableRun].favourite}`;
    document.getElementsByClassName('images')[0].animate([{ transform: 'translateY(-50px)' }, { transform: 'translateY(0)' }], { duration: 50, fill: "forwards" });
}