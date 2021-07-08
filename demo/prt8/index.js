function times() {
    let times = new Date();
    console.log(times);
    document.getElementsByClassName('clock')[0].innerHTML = times;
}
setInterval(times, 1000);