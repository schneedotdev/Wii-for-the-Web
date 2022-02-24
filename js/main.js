document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x,y);
    
    // document.querySelector('.controller').style.margin = `${y}px 0 0 ${x}px`;
    // document.querySelector('.controller').style.transform = `translate(${x}px, ${y}px)`;

    document.querySelector('.controller').style.left = `${x}px`;
    document.querySelector('.controller').style.top = `${y}px`;

    // if (y > 450) {
    //     document.querySelector('.controller').style.height = "50rem";
    // } else if (y > 370) {
    //     document.querySelector('.controller').style.height = "40rem";
    // } else if (y > 300) {
    //     document.querySelector('.controller').style.height = "30rem";
    // } else {
    //     document.querySelector('.controller').style.height = "20rem";
    // }

    // if (x > 600) {
    //     document.querySelector('.controller').style.transform = "rotate(30deg)";
    // } else if (x > 500) {
    //     document.querySelector('.controller').style.transform = "rotate(20deg)";
    // } else if (x > 400) {
    //     document.querySelector('.controller').style.transform = "rotate(10deg)";
    // } else if (x > 300) {
    //     document.querySelector('.controller').style.transform = "rotate(0deg)";
    // } else if (x > 200) {
    //     document.querySelector('.controller').style.transform = "rotate(-10deg)";
    // } else if (x > 100) {
    //     document.querySelector('.controller').style.transform = "rotate(-20deg)";
    // } else {
    //     document.querySelector('.controller').style.transform = "rotate(-30deg)";
    // }

});

console.log('output');