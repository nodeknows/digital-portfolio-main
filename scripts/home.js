function delay(ms) { // await delay(2000)
    return new Promise(resolve => setTimeout(resolve, ms));
};

let intro = document.querySelector('.intro')
let evan = document.querySelector('#evan')
let yangs = document.querySelector('#yangs')
let portfolio = document.querySelector('#portfolio')
let body = document.querySelector('.body')

async function init() {
    yangs.style.animationDelay = '.5s'
    portfolio.style.animationDelay = '1s'

    evan.setAttribute('transition-style', 'in:wipe:right')
    yangs.setAttribute('transition-style', 'in:wipe:left')
    portfolio.setAttribute('transition-style', 'in:wipe:right')

    intro.style.transition = 'all 1s'

    evan.style.transition = 'all 1s'
    yangs.style.transition = 'all 1s'
    portfolio.style.transition = 'all 1s'

    body.style.transition = 'all 1s'

    await delay(1500)

    evan.style.paddingTop = '40px'

    await delay(1000)
    
    evan.style.maxWidth = '250px'
    yangs.style.maxWidth = '250px'
    portfolio.style.maxWidth = '250px'

    intro.style.maxHeight = '415px'

    await delay(1000)

    body.style.opacity = '1'

}


init()