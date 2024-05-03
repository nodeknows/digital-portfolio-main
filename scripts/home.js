function delay(ms) { // await delay(2000)
    return new Promise(resolve => setTimeout(resolve, ms));
};

let intro = document.querySelector('.intro')
let evan = document.querySelector('#evan')
let yangs = document.querySelector('#yangs')
let portfolio = document.querySelector('#portfolio')

async function init() {
    yangs.style.animationDelay = '.5s'
    portfolio.style.animationDelay = '1s'

    evan.setAttribute('transition-style', 'in:wipe:right')
    yangs.setAttribute('transition-style', 'in:wipe:left')
    portfolio.setAttribute('transition-style', 'in:wipe:right')
}


init()