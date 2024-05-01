function delay(ms) { // await delay(2000)
    return new Promise(resolve => setTimeout(resolve, ms));
};

let div = document.querySelector('.intro > div');
let h1 = document.querySelector('.intro > div > h1');
let h2 = document.querySelector('.intro > h2');

async function init() {
    const prevW = h1.offsetWidth;

    div.style.maxWidth = "0px";

    await delay(500)

    div.style.maxWidth = `${prevW}px`

    await delay(1500) // 1.5 sec to complete animation

    h2.style.opacity = 1;

    setInterval(() => {
        
        if (h2.style.opacity == 1) {
            h2.style.opacity = 0;
        } else {
            h2.style.opacity = 1;
        }
    }, 500);
};

document.querySelector('body').onclick = goHome;

function goHome() {
    window.location = 'home.html'
}

init();