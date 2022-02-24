let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

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
    let arcscale = Math.round((x - (windowWidth / 2)) / 15);
    // let imageOffset = Math.round((x / windowWidth));
    
    document.querySelector('.controller').style.rotate = `${arcscale}deg`;
    // document.querySelector('.controller').style.transform = `${imageOffset}%`;
}