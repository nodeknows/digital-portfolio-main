function delay(ms) { // await delay(2000)
    return new Promise(resolve => setTimeout(resolve, ms));
};

let intro = document.querySelector('.intro')
let trueBody = document.querySelector('body')

let evan = document.querySelector('#evan')
let yangs = document.querySelector('#yangs')
let portfolio = document.querySelector('#portfolio')

let body = document.querySelector('.body')
let p1 = document.querySelector('.body p:nth-of-type(1)')
let bodyDiv = document.querySelector('.body div')
let p2 = document.querySelector('.body p:nth-of-type(2)')

let worked = document.querySelector('.worked')

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

async function init() {
    yangs.style.animationDelay = '.5s'
    portfolio.style.animationDelay = '1s'

    evan.setAttribute('transition-style', 'in:wipe:right')
    yangs.setAttribute('transition-style', 'in:wipe:left')
    portfolio.setAttribute('transition-style', 'in:wipe:right')

    p1.style.animationDelay = '3500ms'
    p1.setAttribute('transition-style', 'in:wipe:top-left')


    bodyDiv.style.animationDelay = '4000ms'
    bodyDiv.setAttribute('transition-style', 'in:wipe:top-right')


    p2.style.animationDelay = '4500ms'
    p2.setAttribute('transition-style', 'in:wipe:top-left')


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

    await delay(2000)

    worked.style.display = 'flex'
    trueBody.style.overflowY = 'visible'
}


init()

var md = new MobileDetect(window.navigator.userAgent);
console.log(md.mobile());          // 'Sony'
console.log(md.phone());           // 'Sony'
console.log(md.tablet());          // null
console.log(md.userAgent());       // 'Safari'
console.log(md.os());              // 'AndroidOS'
console.log(md.is('iPhone'));      // false
console.log(md.is('bot'));         // false
console.log(md.version('Webkit'));         // 534.3
console.log(md.versionStr('Build'));       // '4.1.A.0.562'
console.log(md.match('playstation|xbox')); // false