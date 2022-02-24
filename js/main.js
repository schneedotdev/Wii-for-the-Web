let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

/**
 * when the window is resized, windowWidth and windowHeight will get reassigned when the cursor is moved.
 */
window.onresize = function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
}

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(`x: ${x}`,`y: ${y}`);

    moveImage(x, y);
    tiltImage(y);
    rotateImage(x);
});


/**
 * name: moveImage
 * description: moves the image element with a class of controller on the DOM based on the position of your mouse cursor
 * @param x: x-axis value of the cursor in reference to the window width
 * @param y: y-axis value of the cursor in reference to the window height
 */
function moveImage(x, y) {
    if (x >= windowWidth * 0.3 && x <= windowWidth * 0.7) {
        document.querySelector('.controller').style.left = `${x}px`;
    } else if (x < windowWidth * 0.3){
        document.querySelector('.controller').style.left = `${windowWidth * 0.3}px`;
    } else {
        document.querySelector('.controller').style.left = `${windowWidth * 0.7}px`;
    }

    document.querySelector('.controller').style.top = `${y}px`;
}

/**
 * name: tiltImage
 * description: changes the height of the controller element to simulate tilting of a controller
 * @param y: y-axis value of the cursor in reference to the window height
 */
function tiltImage(y) {
    // let twentiethOfScreenHeight = Math.round(window.innerHeight / 20);

    // if (y < twentiethOfScreenHeight * 5) {
    //     document.querySelector('.controller').style.height = "35rem";
    // } else if (y < twentiethOfScreenHeight * 6) {
    //     document.querySelector('.controller').style.height = "40rem";
    // } else if (y < twentiethOfScreenHeight * 7) {
    //     document.querySelector('.controller').style.height = "45rem";
    // } else if (y < twentiethOfScreenHeight * 8) {
    //     document.querySelector('.controller').style.height = "50rem";
    // } else if (y < twentiethOfScreenHeight * 9) {
    //     document.querySelector('.controller').style.height = "55rem";
    // } else {
    //     document.querySelector('.controller').style.height = "60rem";
    // }
}

/**
 * name: rotateImage
 * description: rotates the image element with a class of controller based on the value of the cursors horizontal positioning. To simmulate pointing a controller left and right.
 * @param x: x-axis value of the cursor in reference to the window width
 */
function rotateImage(x) {
    let halfWidth = windowWidth / 2;
    let arcscale = (x - halfWidth) / 69;
    let multiplier = 10; // Multiplier for arcscale. Allows for more rotation given certain bounds (default value is for outer bounds)
    let imageOffset; // determines the reference point between the cursor and the center of the image element

    // if (x > (windowWidth * 0.4) && x < (windowWidth * 0.6)){
    //     imageOffset = -50;
    // } else if (x < (windowWidth * 0.4)) {
    //     imageOffset = -40;
    // } else {
    //     imageOffset = -60;
    // }

    // if (x >= windowWidth * 0.4 && x <= windowWidth * 0.6) {
    //     document.querySelector('.controller').style.transform = `translate(${imageOffset}%) rotate(${arcscale}deg)`;
    // } else if (x >= windowWidth * 0.35 && x <= windowWidth * 0.65) {
    //     document.querySelector('.controller').style.transform = `translate(${imageOffset}%) rotate(${arcscale * 1.5}deg)`;
    // } else if (x >= windowWidth * 0.3 && x <= windowWidth * 0.7) {
    //     document.querySelector('.controller').style.transform = `translate(${imageOffset}%) rotate(${arcscale * 2}deg)`;
    // } else {
    //     document.querySelector('.controller').style.transform = `translate(${imageOffset}%) rotate(${arcscale * 2.5}deg)`;
    // }

    if (x >= windowWidth * 0.3 && x <= windowWidth * 0.7) {
        imageOffset = ((halfWidth - x) / (halfWidth * 2)) * 100 - 50;
        muliplier = 2.5;
    } else if (x <= windowWidth * 0.3) {
        imageOffset = -30;
    } else {
        imageOffset = -70;
    }

    document.querySelector('.controller').style.transform = `translate(${imageOffset}%) rotate(${arcscale * muliplier}deg)`;
}