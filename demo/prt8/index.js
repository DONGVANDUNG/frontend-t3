let array = ['iphone1.jpg', 'iphone2.jpg', 'iphone3.jpg', 'iphone4.jpg'];
let nextImage = document.getElementsByClassName('next')[0];
let prevImage = document.getElementsByClassName('prev')[0];
let variableRun = -1;
let item_image = document.getElementsByClassName('image-item')[0];
nextImage.onclick = function() {
    if (variableRun == -1) {
        variableRun++;
    }
    variableRun++;
    console.log(variableRun);

    if (variableRun == 4) {
        variableRun = 0;
    }
    item_image.style.backgroundImage = `url(/images1/${array[variableRun]}`;
    item_image.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: 1400 });
}
prevImage.onclick = function() {
    if (variableRun == 4) {
        variableRun = 0;
    }
    variableRun--;
    if (variableRun == -1) {
        variableRun = 3;
    }
    console.log(variableRun);
    item_image.style.backgroundImage = `url(/images1/${array[variableRun]}`;
    item_image.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: 1400 });
}