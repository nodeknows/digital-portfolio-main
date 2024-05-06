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

    console.log('test')

    evan.style.transition = 'all 1s'
    yangs.style.transition = 'all 1s'
    portfolio.style.transition = 'all 1s'

    await delay(1500)

    evan.style.paddingTop = '0%'

    await delay(1000)
    
    evan.style.maxWidth = '250px'
    yangs.style.maxWidth = '250px'
    portfolio.style.maxWidth = '250px'
}


init()